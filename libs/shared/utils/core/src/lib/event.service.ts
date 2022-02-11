import { EventEmitter, Injectable } from '@angular/core';
import { filter, Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private allEvents: { [id: string]: EventEmitter<unknown>; } = {};

  
  registerEvent(eventName: string) {
    if (!this.allEvents[eventName]) {
      this.allEvents[eventName] = new EventEmitter();
    }
  }

  publishEvent(eventName: string, payload: unknown = {}) {
    if (!this.allEvents[eventName]) {
      console.error(`${eventName} event not registered...`);
      return;
    }
    this.allEvents[eventName].next(payload);
  }

  subscribeEvent(eventName: string) {
    if (!this.allEvents[eventName]) {
      console.error(`${eventName} event not registered...`);
      return;
    }
    return this.allEvents[eventName];
  }

  clearEvents() {
    this.allEvents = {};
  }
}

// ngOnInit() {
//   this.eventService.subscribeEvent(Events.productAdded).subscribe((payload: string) => this.onProductAdded(payload));
// }


// removeProduct(productName: string) {
//   this.eventService.publishEvent(Events.productRemoved, productName);
// }

export interface IEventListener {
  ignore(): void;
}
export interface IBrokeredEvent {
  name: string;
  emit(data: unknown): void;
  listen(next: (data: unknown) => void): IEventListener;
}
class EventListener implements IEventListener {
  constructor(private _subscription: Subscription) {
  }
  public ignore(): void {
      this._subscription.unsubscribe();
  }
}

class BrokeredEvent<T> implements IBrokeredEvent {
  private _subject: Subject<T>;
  constructor(public name: string) {
      this._subject = new Subject<T>();
  }
  public emit(data: T): void {
      this._subject.next(data);
  }
  public listen(next: (value: T) => void): IEventListener {
      return new EventListener(this._subject.subscribe(next));
  }
}

@Injectable({
  providedIn: 'root'
})
export class EventBrokerService {
    private _events: { [name: string]: IBrokeredEvent };
    constructor() {
        this._events = {};
    }
    private register<T>(eventName: string): BrokeredEvent<T> {
        let event = this._events[eventName];
        if (typeof event === 'undefined') {
            event = this._events[eventName] = new BrokeredEvent<T>(eventName);
        }
        return event as BrokeredEvent<T>;
    }
    public listen<T>(eventName: string, next: (value: T) => void): IEventListener {
        return this.register<T>(eventName).listen(next);
    }
    public emit<T>(eventName: string, data: T): void {
        return this.register<T>(eventName).emit(data);
    }
}

/*
 *   Event Broker Service
 https://github.com/cristiammercado/ng-event-bus
 https://github.com/ultrasonicsoft/ng-event-broker-service-example/blob/5166945ad32710556630b76df5ea6fca2bc6b89f/README.md
    usage:
     ...
     import { EventBrokerService, IEventListener } from "EventBrokerService";
     @Component({
        selector: "my-listening-component",
        template: `
            <div *ngIf="indicator">I am On!</div>
            <div *ngIf="!indicator">I am Off!</div>
        `
    })
    @Injectable()
    export class MyListeningComponent implements OnDestroy {
        public indicator: boolean = false;
        private _listenListener: IEventListener;
        constructor(private _eventBroker: EventBrokerService) {
            this._listenSubscription = _eventBroker.listen<boolean>("my-event",(value:boolean)=>{
                this.indicator = value;
            });
        }
        public ngOnDestroy() {
            this._listenListener.ignore();
        }
     }
     @Component({
        selector: "my-sending-component",
        template: `
            <button (click)="canYouHearMe(true)>Turn me on</Button>
            <button (click)="canYouHearMe(false)>Turn me off</Button>
        `
    })
    @Injectable()
    export class MySendingComponent {
        constructor(private _eventBroker: EventBrokerService) {
        }
        public canYourHearMe(value:boolean) {
            _eventBroker.emit<boolean>("my-event",value);
        }
    }
 */
    export enum AppEventType {
      ClickedOnNotification = 'CLICKED_ON_NOTIFICATION',
      SocketEvent = 'SOCKET_EVENT',
    }
    export class AppEvent<T> {
      constructor(
        public type: AppEventType,
        public payload: T,
      ) {}
    }

    @Injectable()
export class EventQueueService {

  private eventBrocker = new Subject<AppEvent<unknown>>();

  on(eventType: AppEventType): Observable<AppEvent<unknown>> {
    return this.eventBrocker.pipe(filter(event => event.type === eventType));
  }

  dispatch<T>(event: AppEvent<T>): void {
    this.eventBrocker.next(event);
  }

}

/*
@Component({
  selector: 'some-component',
  templateUrl: 'some.template.html',
})
export class SomeComponent {
  constructor(private eventQueue: EventQueueService) {}

  onClick(event: MouseEvent) {
    this.eventQueue.dispatch(new AppEvent(AppEventType.ClickedOnNotification, event));
  }
}

@Component({
  selector: 'another-component',
  templateUrl: 'another.template.html',
})
export class AnotherComponent implements OnInit {
  constructor(private eventQueue: EventQueueService) {}

  ngOnInit() {
    this.eventQueue.on(AppEventType.ClickedOnNotification).subscribe(event => this.handleEvent(event.payload));
  }

  handleEvent(event: MouseEvent) {
    // Do something with the click event
  }
}

@Component({
  selector: 'another-component',
  templateUrl: 'another.template.html',
})
export class AnotherComponent implements OnInit {
  data;

  constructor(
    private eventQueue: EventQueueService,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.eventQueue.on(AppEventType.AccountChanged)
        .pipe(
          switchMap(() => this.dataService.getData()),
        )
        .subscribe(res => this.handleEvent(res));
  }

  handleEvent(res) {
    // Do something with the response
  }
}

Bonus round
We can also extend the basic AppEvent class to get new events without having to provide the type property every time:

export class SomeOtherEvent extends AppEvent {
  constructor(payload: number) {
    super(AppEventType.SomeOtherEvent, payload);
  }
}
*/