/**
 * Created by pxq on 17-7-12.
 */
/**
 * Created with JetBrains WebStorm.
 * User: zhy
 * Date: 14-6-7
 * Time: 下午5:34
 * To change this template use File | Settings | File Templates.
 */
function PlaceAreaEditor(id, value, parentEle)
{
  PlaceAreaEditor.superClass.constructor.call(this, id, value, parentEle);
}

extend(PlaceAreaEditor, PlaceFieldEditor);

PlaceAreaEditor.prototype.initElements = function ()
{
  this.txtEle = $("<span/>");
  this.txtEle.text(this.value);

  this.textEle = $("<textarea style='width:315px;height:70px;' />");
  this.textEle.text(this.value);

  this.btnWapper = $("<div style='display: block;'/>");
  this.saveBtn = $("<input type='button' value='保存'/>");
  this.cancelBtn = $("<input type='button' value='取消'/>");
  this.btnWapper.append(this.saveBtn).append(this.cancelBtn);

  this.parentEle.append(this.txtEle).append(this.textEle).append(this.btnWapper);

  this.convertToReadable();

};