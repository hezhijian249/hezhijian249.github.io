import { FormField } from "form-render";

export interface ComponentLibrary {
  /**
   * 组件的id
   */
  id?: string;
  /**
   * 组件名称
   */
  name: string;

  /**
   * 组件描述图片地址
   */
  imgUrl: string;

  /**
   * 渲染组件的schema
   */
  schema: FormField;
}
