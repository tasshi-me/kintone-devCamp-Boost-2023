declare namespace KintoneRestAPI {
  type Record<R extends { [string]: OneOf }> = {
    [C in keyof R]: Field<R[C]>;
  };
  type PartialRecord<R extends { [string]: OneOf }> = {
    [C in keyof R]?: Field<R[C]>;
  };
  type Field<F extends OneOf> = F extends kintone.fieldTypes.SingleLineText
    ? import("@kintone/rest-api-client").KintoneRecordField.SingleLineText
    : F extends kintone.fieldTypes.RichText
    ? import("@kintone/rest-api-client").KintoneRecordField.RichText
    : F extends kintone.fieldTypes.MultiLineText
    ? import("@kintone/rest-api-client").KintoneRecordField.MultiLineText
    : F extends kintone.fieldTypes.Number
    ? import("@kintone/rest-api-client").KintoneRecordField.Number
    : F extends kintone.fieldTypes.Calc
    ? import("@kintone/rest-api-client").KintoneRecordField.Calc
    : F extends kintone.fieldTypes.RadioButton
    ? import("@kintone/rest-api-client").KintoneRecordField.RadioButton
    : F extends kintone.fieldTypes.DropDown
    ? import("@kintone/rest-api-client").KintoneRecordField.Dropdown
    : F extends kintone.fieldTypes.Date
    ? import("@kintone/rest-api-client").KintoneRecordField.Date
    : F extends kintone.fieldTypes.Time
    ? import("@kintone/rest-api-client").KintoneRecordField.Time
    : F extends kintone.fieldTypes.DateTime
    ? import("@kintone/rest-api-client").KintoneRecordField.DateTime
    : F extends kintone.fieldTypes.Link
    ? import("@kintone/rest-api-client").KintoneRecordField.Link
    : F extends kintone.fieldTypes.CheckBox
    ? import("@kintone/rest-api-client").KintoneRecordField.CheckBox
    : F extends kintone.fieldTypes.MultiSelect
    ? import("@kintone/rest-api-client").KintoneRecordField.MultiSelect
    : F extends kintone.fieldTypes.UserSelect
    ? import("@kintone/rest-api-client").KintoneRecordField.UserSelect
    : F extends kintone.fieldTypes.OrganizationSelect
    ? import("@kintone/rest-api-client").KintoneRecordField.OrganizationSelect
    : F extends kintone.fieldTypes.GroupSelect
    ? import("@kintone/rest-api-client").KintoneRecordField.GroupSelect
    : F extends kintone.fieldTypes.File
    ? import("@kintone/rest-api-client").KintoneRecordField.File
    : F extends kintone.fieldTypes.Id
    ? import("@kintone/rest-api-client").KintoneRecordField.ID
    : F extends kintone.fieldTypes.Revision
    ? import("@kintone/rest-api-client").KintoneRecordField.Revision
    : F extends kintone.fieldTypes.Modifier
    ? import("@kintone/rest-api-client").KintoneRecordField.Modifier
    : F extends kintone.fieldTypes.Creator
    ? import("@kintone/rest-api-client").KintoneRecordField.Creator
    : F extends kintone.fieldTypes.RecordNumber
    ? import("@kintone/rest-api-client").KintoneRecordField.RecordNumber
    : F extends kintone.fieldTypes.UpdatedTime
    ? import("@kintone/rest-api-client").KintoneRecordField.UpdatedTime
    : F extends kintone.fieldTypes.CreatedTime
    ? import("@kintone/rest-api-client").KintoneRecordField.CreatedTime
    : never;
}

type OneOf =
  | kintone.fieldTypes.SingleLineText
  | kintone.fieldTypes.RichText
  | kintone.fieldTypes.MultiLineText
  | kintone.fieldTypes.Number
  | kintone.fieldTypes.Calc
  | kintone.fieldTypes.RadioButton
  | kintone.fieldTypes.DropDown
  | kintone.fieldTypes.Date
  | kintone.fieldTypes.Time
  | kintone.fieldTypes.DateTime
  | kintone.fieldTypes.Link
  | kintone.fieldTypes.CheckBox
  | kintone.fieldTypes.MultiSelect
  | kintone.fieldTypes.UserSelect
  | kintone.fieldTypes.OrganizationSelect
  | kintone.fieldTypes.GroupSelect
  | kintone.fieldTypes.File
  | kintone.fieldTypes.Id
  | kintone.fieldTypes.Revision
  | kintone.fieldTypes.Modifier
  | kintone.fieldTypes.Creator
  | kintone.fieldTypes.RecordNumber
  | kintone.fieldTypes.UpdatedTime
  | kintone.fieldTypes.CreatedTime;
