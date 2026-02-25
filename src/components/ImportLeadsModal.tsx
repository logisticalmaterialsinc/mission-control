"use client";

import { useState, useRef } from 'react';
import { Upload, X, FileText, FileSpreadsheet, File } from 'lucide-react';

export default function ImportLeadsModal({
  isOpen,
  onClose,
  onImportSuccess
}: {
  isOpen: boolean;
  onClose: () => void;
  onImportSuccess: (leads: any[]) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
      setError(null);
    }
  };

  const handleImport = async () => {
    if (!file) {
      setError('Please select a file to import');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const leads = await parseFile(file);
      onImportSuccess(leads);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to parse file');
    } finally {
      setIsLoading(false);
    }
  };

  const parseFile = async (file: File): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const content = e.target?.result as string;
          if (!content) {
            reject(new Error('File is empty'));
            return;
          }

          // Parse based on file extension
          const extension = file.name.split('.').pop()?.toLowerCase();
          let leads: any[] = [];

          if (extension === 'csv') {
            leads = parseCSV(content);
          } else if (extension === 'xlsx' || extension === 'xls') {
            leads = parseExcel(content);
          } else if (extension === 'txt') {
            leads = parseTXT(content);
          } else {
            reject(new Error('Unsupported file format. Please use CSV, XLSX, or TXT'));
            return;
          }

          resolve(leads);
        } catch (err) {
          reject(err);
        }
      };

      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };

      if (file.type.startsWith('text/') || file.name.endsWith('.csv') || file.name.endsWith('.txt')) {
        reader.readAsText(file);
      } else {
        reader.readAsArrayBuffer(file);
      }
    });
  };

  const parseCSV = (content: string): any[] => {
    const lines = content.split('\n').filter(line => line.trim() !== '');
    if (lines.length < 2) {
      throw new Error('CSV file must have at least one data row');
    }

    const headers = lines[0].split(',').map(h => h.trim());
    const leads = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim());
      const lead: any = {};

      for (let j = 0; j < headers.length; j++) {
        if (headers[j] && values[j]) {
          lead[headers[j]] = values[j];
        }
      }

      // Ensure required fields
      if (!lead.name && !lead.Name) {
        lead.name = `Lead ${i}`;
      }
      if (!lead.email && !lead.Email) {
        lead.email = 'N/A';
      }
      if (!lead.phone && !lead.Phone) {
        lead.phone = 'N/A';
      }
      if (!lead.status && !lead.Status) {
        lead.status = 'New';
      }

      leads.push(lead);
    }

    return leads;
  };

  const parseTXT = (content: string): any[] => {
    const lines = content.split('\n').filter(line => line.trim() !== '');
    const leads = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      // Simple parsing for TXT - assume one lead per line
      const parts = line.split(/[,\t]/).map(p => p.trim());
      const lead: any = {
        name: parts[0] || `Lead ${i + 1}`,
        email: parts[1] || 'N/A',
        phone: parts[2] || 'N/A',
        company: parts[3] || 'N/A',
        status: 'New'
      };

      leads.push(lead);
    }

    return leads;
  };

  const parseExcel = (content: ArrayBuffer): any[] => {
    // For XLSX parsing, we would typically use a library like xlsx
    // This is a placeholder implementation
    throw new Error('Excel parsing requires additional libraries. Please use CSV or TXT format.');
  };

  const getFileIcon = () => {
    if (!file) return null;
    const extension = file.name.split('.').pop()?.toLowerCase();
    
    if (extension === 'csv') {
      return <FileText className="w-8 h-8 text-blue-600" />;
    } else if (extension === 'xlsx' || extension === 'xls') {
      return <FileSpreadsheet className="w-8 h-8 text-green-600" />;
    } else if (extension === 'txt') {
      return <File className="w-8 h-8 text-gray-600" />;
    }
    
    return <File className="w-8 h-8 text-gray-600" />;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-xl font-bold">Import Leads</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 flex-1 overflow-auto">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Supported Formats</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                CSV (.csv), Excel (.xlsx, .xls), Text (.txt)
              </p>
            </div>

            {!file ? (
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragging ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600'
                }`}
                onClick={() => fileInputRef.current?.click()}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".csv,.xlsx,.xls,.txt"
                  className="hidden"
                />
                <Upload className="w-12 h-12 mx-auto mb-4 text-zinc-400" />
                <h4 className="font-medium mb-2">Drag & drop files here</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                  or click to browse files
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Select File
                </button>
              </div>
            ) : (
              <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {getFileIcon()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{file.name}</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                      {(file.size / 1024).toFixed(2)} KB
                    </div>
                  </div>
                  <button
                    onClick={() => setFile(null)}
                    className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm">
                {error}
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleImport}
            disabled={!file || isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:bg-blue-600"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Importing...
              </span>
            ) : (
              'Import Leads'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}