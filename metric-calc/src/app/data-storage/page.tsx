import type { Metadata } from 'next';
import UnitConverter from '@/components/calculators/UnitConverter';
import InfoBox from '@/components/calculators/InfoBox';
import { dataStorageUnits } from '@/lib/constants/dataStorageUnits';
import { HardDrive, Database } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data Storage Converter | MetricCalc',
  description: 'Convert between data storage units like bytes, kilobytes, megabytes, gigabytes and more with our free online calculator. Supports both decimal and binary units.',
  keywords: 'data storage converter, byte converter, KB to MB, GB to TB, binary units, decimal units, data unit calculator',
};

export default function DataStoragePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-4 text-center md:text-left">Data Storage Converter</h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Convert between different data storage units including bytes, kilobytes, megabytes, gigabytes, 
          and more with this free online calculator. Supports both decimal (SI) and binary (IEC) units.
        </p>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <UnitConverter unitGroups={dataStorageUnits} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <InfoBox 
            title="Decimal vs. Binary Units"
            icon={<Database className="h-5 w-5 text-primary" />}
            content={
              <div>
                <p className="mb-2"><strong>Decimal (SI) Units:</strong> Base 10</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>1 kilobyte (KB) = 1,000 bytes</li>
                  <li>1 megabyte (MB) = 1,000,000 bytes</li>
                  <li>1 gigabyte (GB) = 1,000,000,000 bytes</li>
                </ul>
                
                <p className="mt-4 mb-2"><strong>Binary (IEC) Units:</strong> Base 2</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>1 kibibyte (KiB) = 1,024 bytes</li>
                  <li>1 mebibyte (MiB) = 1,048,576 bytes</li>
                  <li>1 gibibyte (GiB) = 1,073,741,824 bytes</li>
                </ul>
              </div>
            }
          />
          
          <InfoBox 
            title="Common Data Conversions"
            icon={<HardDrive className="h-5 w-5 text-primary" />}
            content={[
              "1 byte = 8 bits",
              "1 kilobyte (KB) = 1,000 bytes",
              "1 megabyte (MB) = 1,000 kilobytes",
              "1 gigabyte (GB) = 1,000 megabytes",
              "1 gibibyte (GiB) = 1,073,741,824 bytes",
              "1 gibibyte (GiB) ≈ 1.074 gigabytes (GB)"
            ]}
          />
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">About Data Storage Units</h2>
          
          <div className="prose max-w-none dark:prose-invert">
            <h3>Understanding Bits and Bytes</h3>
            <p>
              Data storage and transfer is measured in bits and bytes. A bit is the smallest unit of digital information, 
              representing a binary value of either 0 or 1. A byte consists of 8 bits and is capable of representing 
              a single character, such as a letter, number, or symbol.
            </p>
            
            <h3>Decimal (SI) vs. Binary (IEC) Units</h3>
            <p>
              There are two main standards for measuring digital information:
            </p>
            
            <h4>Decimal (SI) Units</h4>
            <p>
              The International System of Units (SI) uses decimal prefixes based on powers of 10:
            </p>
            <ul>
              <li>1 kilobyte (KB) = 10³ = 1,000 bytes</li>
              <li>1 megabyte (MB) = 10⁶ = 1,000,000 bytes</li>
              <li>1 gigabyte (GB) = 10⁹ = 1,000,000,000 bytes</li>
              <li>1 terabyte (TB) = 10¹² = 1,000,000,000,000 bytes</li>
            </ul>
            <p>
              These units are commonly used by storage device manufacturers and in data transfer rates.
            </p>
            
            <h4>Binary (IEC) Units</h4>
            <p>
              The International Electrotechnical Commission (IEC) introduced binary prefixes based on powers of 2, 
              which better reflect how computers actually address memory:
            </p>
            <ul>
              <li>1 kibibyte (KiB) = 2¹⁰ = 1,024 bytes</li>
              <li>1 mebibyte (MiB) = 2²⁰ = 1,048,576 bytes</li>
              <li>1 gibibyte (GiB) = 2³⁰ = 1,073,741,824 bytes</li>
              <li>1 tebibyte (TiB) = 2⁴⁰ = 1,099,511,627,776 bytes</li>
            </ul>
            <p>
              Operating systems typically use binary units when reporting file sizes and memory usage, 
              although they often label them using the decimal names (KB, MB, GB), which can lead to confusion.
            </p>
            
            <h3>The Confusion Between Units</h3>
            <p>
              The discrepancy between decimal and binary units can cause confusion. For example, a &quot;500 GB&quot; hard drive 
              uses the decimal definition and contains 500,000,000,000 bytes. However, when connected to a computer, 
              the operating system might report it as &quot;465 GB&quot; because it&apos;s actually measuring 465 GiB (binary units), 
              but using GB as the label.
            </p>
            <p>
              To address this confusion, the IEC introduced the binary prefixes (KiB, MiB, GiB, etc.) in 1998, 
              though their adoption has been slow in consumer contexts.
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Why does my 1TB hard drive show only 931GB in Windows?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                This occurs because hard drive manufacturers use decimal units (1TB = 1,000,000,000,000 bytes), 
                while operating systems typically use binary units. In binary units, 1TB of data is actually 
                931GB (or more accurately, 931GiB).
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">What&apos;s the difference between MB and MiB?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                MB (megabyte) is a decimal unit equal to 1,000,000 bytes, while MiB (mebibyte) is a binary unit 
                equal to 1,048,576 bytes. The difference between them is about 4.9%.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">How many bytes are in a gigabyte?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                There are 1,000,000,000 (one billion) bytes in a gigabyte (GB) using the decimal system. 
                In the binary system, there are 1,073,741,824 bytes in a gibibyte (GiB).
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">How many megabytes in a gigabyte?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                There are 1,000 megabytes in a gigabyte using the decimal system. In the binary system, 
                there are 1,024 mebibytes in a gibibyte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}