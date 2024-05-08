import React from 'react';

const headers = [
  { label: '', key: 'star', width: 'w-10' },
  {
    label: 'Applicant Name Employer Dept Contract',
    key: 'application_info',
    tooltip: 'Applicant Name Employer Dept Contract',
  },
  {
    label: 'Exam Type',
    key: 'exam_type',
    tooltip: 'Exam Type',
    width: 'w-5/6',
  },
  {
    label: 'Date of Exam',
    key: 'date_exam',
    tooltip: 'Date of Exam',
    width: 'w-5/6',
  },
  {
    label: 'Date Received',
    key: 'date_received',
    tooltip: 'Date Received',
    width: 'w-5/6',
  },
  {
    label: 'Date Complete',
    key: 'date_complete',
    tooltip: 'Date Complete',
    width: 'w-5/6',
  },
  {
    label: 'Initial Rec.',
    key: 'initial_rec',
    tooltip: 'Initial Rec.',
    width: 'w-5/6',
  },
  {
    label: 'Final Rec',
    key: 'final_red',
    tooltip: 'Final Rec',
    width: 'w-5/6',
  },
  {
    label: 'RDQA Deadline',
    key: 'rdqa_deadline',
    tooltip: 'RDQA Deadline',
    width: 'w-5/6',
  },
  {
    label: 'Follow-Up',
    key: 'follow_up',
    tooltip: 'Follow-Up',
    width: 'w-5/6',
  },
  {
    label: 'Deployment Date',
    key: 'deployment_date',
    tooltip: 'Deployment Date',
    width: 'w-5/6',
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 overflow-auto">
      <div className="flex justify-between items-center px-4 py-2 border-b border-black">
        <input className="border p-2" type="search" placeholder="Search..." />
        <div className="pl-4 border-l-2 border-gray-400"> John Doe</div>
      </div>
      <div className="bg-gray-200">
        <div
          className="grid grid-cols-11 text-sm p-2"
          style={{
            gridTemplateColumns: 'auto 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          }}
        >
          {headers.map((header, index) => (
            <div key={index} className={`${header?.width} self-center`}>
              {header.label}
            </div>
          ))}
        </div>
        <div className="bg-[#CCDDEF] p-4 border-b-2 border-black">
          <h6 className="uppercase font-semibold">Group Name</h6>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-11 gap-2 text-gray-800 border-b border-gray-300 hover:bg-blue-100 py-4"
            style={{
              gridTemplateColumns:
                'auto 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
            }}
          >
            <div className="text-center w-10">★</div>
            <div className="text-center">Text</div>
            <div>EXAM TYPE</div>
            <div>1/1/24</div>
            <div>1/1/24</div>
            <div>1/1/24</div>
            <div>1/1/24</div>
            <div>1/1/24</div>
            <div>1/1/24</div>
            <div>1/1/24</div>
            <div>1/1/24</div>
          </div>
        ))}
        <div className="bg-[#CCDDEF] p-4 border-b-2 border-black">
          <h6 className="uppercase font-semibold">Group Name</h6>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
