import React from 'react';
import { Users, ClipboardList, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import StatCard from '../components/StatCard';
import TaskChart from '../components/TaskChart';
import RecentActivity from '../components/RecentActivity';
import { getDashboardStats, mockEmployees, mockTasks } from '../data/mockData';

const Dashboard: React.FC = () => {
  const stats = getDashboardStats();

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Employees"
          value={stats.totalEmployees}
          icon={Users}
          color="blue"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Total Tasks"
          value={stats.totalTasks}
          icon={ClipboardList}
          color="green"
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Completed Tasks"
          value={stats.completedTasks}
          icon={CheckCircle}
          color="green"
        />
        <StatCard
          title="Overdue Tasks"
          value={stats.overdueTasks}
          icon={AlertTriangle}
          color="red"
          trend={{ value: 5, isPositive: false }}
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TaskChart tasks={mockTasks} />
        <RecentActivity tasks={mockTasks} employees={mockEmployees} />
      </div>

      {/* Employee Performance */}
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Team Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockEmployees.slice(0, 3).map((employee) => {
            const employeeTasks = mockTasks.filter(task => task.assignedTo === employee.id);
            const completedTasks = employeeTasks.filter(task => task.status === 'completed').length;
            
            return (
              <div key={employee.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={employee.avatar}
                    alt={employee.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {employee.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {employee.position}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-gray-600">Tasks: {employeeTasks.length}</span>
                  <span className="text-green-600 font-medium">
                    {completedTasks}/{employeeTasks.length} completed
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
