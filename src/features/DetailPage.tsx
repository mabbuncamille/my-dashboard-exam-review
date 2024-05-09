import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const DetailPage: React.FC = () => {
  const [value, setValue] = useState('');
  const headerItems = [
    { label: 'Exam', value: 'Exam Name' },
    { label: 'Team', value: 'Team Name' },
    { label: 'Scheduler', value: 'Scheduler Name' },
    { label: 'ExamQA', value: 'Details or subtext', span: 3 }, // Assuming 'ExamQA' needs to span 3 columns
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-6 pb-4">
        {headerItems.map((item) => (
          <div className="flex">
            <div className="font-semibold text-sm mr-4">{item.label}</div>
            <div className="text-gray-600 text-sm">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* Applicant Information */}
        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-bold mb-4">Applicant Information</h3>
          <div className="flex">
            <div className="space-y-2 flex flex-col mr-2 w-1/2">
              <span className="font-semibold">Name:</span>
              <span className="font-semibold">Age:</span>
              <span className="font-semibold">Gender:</span>
              <span className="font-semibold">Phone Home:</span>
              <span className="font-semibold">Phone Work:</span>
              <span className="font-semibold">Phone Cell:</span>
              <span className="font-semibold">Email:</span>
              <span className="font-semibold">Address:</span>
            </div>
            <div className="space-y-2 flex flex-col">
              <span>Dean Winchester</span>
              <span>24</span>
              <span>Male</span>
              <span>(111) 333-2239</span>
              <span>(111) 333-2239</span>
              <span>(111) 333-2239</span>
              <span>joe@email.com</span>
              <span>111 Main St Anywhere USA 40339</span>
            </div>
          </div>
        </div>

        {/* Referral Information */}
        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-bold mb-4">Referral Information</h3>
          <div className="flex">
            <div className="space-y-2 flex flex-col mr-2 w-1/2">
              <span className="font-semibold">Evaluation Type</span>
              <span className="font-semibold">Employer</span>
              <span className="font-semibold">Dept/Contract</span>
              <span className="font-semibold">Job Class</span>
              <span className="font-semibold">Exam Type</span>
              <span className="font-semibold">Recruiter</span>
              <span className="font-semibold">Deployment Country</span>
              <span className="font-semibold">Deployment Center</span>
            </div>
            <div className="space-y-2 flex flex-col w-1/2">
              <span>Pre-Placement</span>
              <span>Vectrus, subsidiary of V2X</span>
              <span>LOGCAP V - Kuwait Task Order</span>
              <span>Production Control Supervisor</span>
              <span>Frame (49 and Older) [MOD] with Kuwait Visa</span>
              <span>Nick Cole-Rios</span>
              <span>Kuwait</span>
            </div>
          </div>
        </div>

        {/* Exam History */}
        <div className="col-span-1 bg-white p-4 shadow rounded">
          <h3 className="font-bold mb-4">Exam History</h3>
          <div className="flex">
            <div className="border-r-2 border-gray-400 w-1/2 mr-2">
              <p>
                <strong>Referral Dates</strong>
              </p>
              <ul>
                <li>Received 1/1/2024</li>
                <li>Initiated 1/1/2024</li>
                <li>Deployment</li>
              </ul>
              <p className="mt-8 mb-4">Recommendations</p>
              <strong>Most Recent</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mauris.
              </p>
              <strong>Date</strong>
              <p>1/1/2024</p>
            </div>
            <div className="w-1/2">
              <p>
                <strong>Exam Dates</strong>
              </p>
              <ul>
                <li>Exam 1/1/2024</li>
                <li>Received 1/1/2024</li>
                <li>Complete 1/1/2024</li>
              </ul>
              <strong className="mt-8">RDQA</strong>
              <p>Initiated</p>
              <p>Deadline</p>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Notes */}
      <div className="mt-4 bg-white p-4 shadow rounded">
        <h2 className="font-bold text-lg mb-4">Exam Notes</h2>
        <div>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
