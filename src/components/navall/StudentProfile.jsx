import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import ErrorSection7 from "./ErrorSection7";

const StudentProfile = ({ student }) => {
  if (!student) {
    return <ErrorSection7 />; // If student data is not passed or still loading
  }

  return (
    <div className="bg-[#1E3A8A] min-h-screen py-10 px-5 sm:px-10">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 sm:p-10 lg:p-12 space-y-8">
        <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-6">
          Student Profile
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 mb-6">
          <h1 className="text-3xl font-semibold text-[#1E3A8A] text-center sm:text-left mb-2 sm:mb-0">
            Hi! {student.name}
          </h1>
          <FaUserGraduate className="text-[#1E3A8A] text-[60px] sm:text-[80px]" />
        </div>

        <div className="space-y-4 mb-8 text-center sm:text-left">
          <h3 className="text-xl text-[#333] font-medium">
            Name: {student.name}
          </h3>
          <h3 className="text-xl text-[#333] font-medium">
            Roll Number: {student.roll}
          </h3>
          <h3 className="text-xl text-[#333] font-medium">
            Course: {student.course}
          </h3>
          <h3 className="text-xl text-[#333] font-medium">
            Guardian: {student.guardian}
          </h3>
          <h3 className="text-xl text-[#333] font-medium">
            Starting Year: {student.starting}
          </h3>
          <h3 className="text-xl text-[#333] font-medium">
            End Year: {student.end}
          </h3>
        </div>

        <div className="space-y-4 mb-8 text-center sm:text-left">
          <h3 className="text-2xl text-[#333] font-medium">Other Details</h3>
          <ul className="text-sm text-[#555]">
            {student.bca && <li>BCA</li>}
            {student.mca && <li>MCA</li>}
            {student.btech && <li>BTech</li>}
            {student.mtech && <li>MTech</li>}
            {student.bba && <li>BBA</li>}
            {student.mba && <li>MBA</li>}
            {student.jeemain && <li>JEE Main</li>}
            {student.wbjeca && <li>WBJEE CA</li>}
            {student.wbjee && <li>WBJEE</li>}
            {student.gate && <li>GATE</li>}
            {student.ipmat && <li>IPMAT</li>}
            {student.cat && <li>CAT</li>}
          </ul>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-[#333]">
            <tbody>
              {[
                { label: "Name", value: student.name },
                { label: "Roll No", value: student.roll },
                { label: "Guardian Name", value: student.guardian },
                { label: "Course Start Date", value: student.starting },
                { label: "Course End Date", value: student.end },
                { label: "Email ID", value: student.email },
                { label: "Phone Number", value: student.phonenumber },
              ].map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="border px-4 py-2 font-semibold whitespace-nowrap">
                    {item.label}
                  </td>
                  <td className="border px-4 py-2 break-words max-w-[200px] sm:max-w-none lg:max-w-[400px]">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;