export interface TemplateData {
  id: number;
  option: string;
  orderName: string;
  mainName: string;
  subName?: string;
  fundingNumber: string;
  phoneNumber?: string;
  characterCount: string;
  variantType: string;
  _mainName?: string;
  layerName: string;
  pdfName: string;
}

export interface ExcelTemplateData {
  id: number;
  no: number;
  template: string;
  option: string;
  orderName: string;
  mainName: string;
  fundingNumber: string;
  characterCount: string;
  variantType: string;
  layerName: string;
  pdfName?: string;
}
