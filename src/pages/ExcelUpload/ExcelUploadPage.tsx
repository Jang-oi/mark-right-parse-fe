import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx';
import ExcelUploadTemplate from '@/pages/ExcelUpload/components/ExcelUploadTemplate.tsx';

const ExcelUploadPage = () => {
  return (
    <>
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="basic">베이직</TabsTrigger>
          <TabsTrigger value="extra">대용량</TabsTrigger>
        </TabsList>
        <TabsContent value="basic">
          <ExcelUploadTemplate tabVariantType="basic" />
        </TabsContent>
        <TabsContent value="extra">
          <ExcelUploadTemplate tabVariantType="extra" />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ExcelUploadPage;
