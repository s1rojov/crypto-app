import * as XLSX from 'xlsx';
import { ref } from 'vue'
export function useCryptoFn() {
    const file = ref<any>(
        null
    )
    const excelData = ref<any>([])
    function readUploadedExcelData(file: any) {
        const reader: any = new FileReader();
        reader.onload = (event: any) => {
            const data = event.target?.result;
            const workbook = XLSX.read(data, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            excelData.value = XLSX.utils.sheet_to_json(worksheet);
        };
        file.value = file
        reader.readAsBinaryString(file);
    }
    return {
        readUploadedExcelData,
        excelData,
        file
    }
}