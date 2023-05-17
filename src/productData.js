import * as XLSX from 'xlsx';

function loadExcelFile() {
  const workbook = XLSX.readFile('my-excel-file.xlsx');
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  
  const data = XLSX.utils.sheet_to_json(worksheet);
  
  // `data` now contains an array of objects, where each object represents a row in the worksheet
  console.log(data);
}
