import React from 'react';
import { CheckCircle, Clock, AlertCircle, PlayCircle } from 'lucide-react';
import { Task, Employee } from '../types';

interface RecentActivityProps {
  tasks: Task[];
  employees: Employee[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ tasks, employees }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'in progress':
        return <PlayCircle className="h-4 w-4 text-blue-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'on hold':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getEmployeeName = (employeeId: number) => {
    const employee = employees.find(emp => emp.id === employeeId);
    return employee ? employee.name : 'Unknown';
  };

  const recentTasks = tasks.slice(0, 5);

  return (
    <div className="card p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {recentTasks.map((task) => (
          <div key={task.id} className="flex items-start space-x-3">
            {getStatusIcon(task.status)}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {task.title}
              </p>
              <p className="text-xs text-gray-500">
                Assigned to {getEmployeeName(task.assignedTo)} • Due {new Date(task.dueDate).toLocaleDateString()}
              </p>
            </div>
            <span className={`
              inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
              ${task.priority === 'high' ? 'bg-red-100 text-red-800' : ''}
              ${task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : ''}
              ${task.priority === 'low' ? 'bg-green-100 text-green-800' : ''}
            `}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
