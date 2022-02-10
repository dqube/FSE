import { TemplateRef } from '@angular/core';

export interface CardFormly {
  /**
   * Card action group, located at the bottom of the card
   */
  actions?: Array<TemplateRef<void>>;

  /**
   * Content area custom style
   */
  bodyStyle?: { [key: string]: string };

  /**
   * 	whether to remove the border
   * @default false
   */
  borderless?: boolean;

  /**
   * 卡片封面
   */
  cover?: TemplateRef<void>;

  /**
   * Action area in the upper right corner of the card
   */
  extra?: string | TemplateRef<void>;

  /**
   * Float when mouse is over
   * @default false
   */
  hoverable?: boolean;

  /**
   * When the card content is still loading, you can use loading to display a placeholder
   */
  loading?: boolean;

  /**
   * 	card title
   */
  title?: string | TemplateRef<void>;

  /**
   * Card type, can be set to inner or not set
   */
  type?: 'inner';
}
