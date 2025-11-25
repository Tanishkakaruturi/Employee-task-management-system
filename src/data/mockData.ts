import { Employee, Task, DashboardStats } from '../types';

export const mockEmployees: Employee[] = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@company.com',
    position: 'Frontend Developer',
    department: 'Engineering',
    hireDate: '2022-01-15',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    status: 'active'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@company.com',
    position: 'UI/UX Designer',
    department: 'Design',
    hireDate: '2021-03-20',
    phone: '+1 (555) 234-5678',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    status: 'active'
  },
  {
    id: 3,
    name: 'Mike Chen',
    email: 'mike.chen@company.com',
    position: 'Backend Developer',
    department: 'Engineering',
    hireDate: '2020-11-05',
    phone: '+1 (555) 345-6789',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    status: 'active'
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@company.com',
    position: 'Project Manager',
    department: 'Management',
    hireDate: '2019-08-12',
    phone: '+1 (555) 456-7890',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    status: 'active'
  },
  {
    id: 5,
    name: 'David Wilson',
    email: 'david.wilson@company.com',
    position: 'DevOps Engineer',
    department: 'Engineering',
    hireDate: '2023-02-28',
    phone: '+1 (555) 567-8901',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    status: 'active'
  },
  {
    id: 6,
    name: 'Lisa Brown',
    email: 'lisa.brown@company.com',
    position: 'QA Engineer',
    department: 'Engineering',
    hireDate: '2022-06-10',
    phone: '+1 (555) 678-9012',
    avatar: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face',
    status: 'active'
  }
];

export const mockTasks: Task[] = [
  {
    id: 1,
    title: 'Implement User Authentication',
    description: 'Create login and registration pages with form validation and error handling',
    assignedTo: 1,
    status: 'completed',
    priority: 'high',
    dueDate: '2024-01-15',
    createdAt: '2024-01-01',
    estimatedHours: 8,
    actualHours: 7.5
  },
  {
    id: 2,
    title: 'Design Dashboard Layout',
    description: 'Create wireframes and mockups for the main dashboard interface',
    assignedTo: 2,
    status: 'in progress',
    priority: 'high',
    dueDate: '2024-01-20',
    createdAt: '2024-01-05',
    estimatedHours: 12,
    actualHours: 6
  },
  {
    id: 3,
    title: 'API Integration Setup',
    description: 'Set up API endpoints and integrate with frontend services',
    assignedTo: 3,
    status: 'in progress',
    priority: 'medium',
    dueDate: '2024-01-25',
    createdAt: '2024-01-08',
    estimatedHours: 16,
    actualHours: 8
  },
  {
    id: 4,
    title: 'Mobile Responsive Testing',
    description: 'Test and fix responsive design issues on mobile devices',
    assignedTo: 1,
    status: 'pending',
    priority: 'medium',
    dueDate: '2024-01-30',
    createdAt: '2024-01-10',
    estimatedHours: 6
  },
  {
    id: 5,
    title: 'Database Optimization',
    description: 'Optimize database queries and improve performance',
    assignedTo: 5,
    status: 'on hold',
    priority: 'low',
    dueDate: '2024-02-05',
    createdAt: '2024-01-12',
    estimatedHours: 10
  },
  {
    id: 6,
    title: 'User Profile Management',
    description: 'Implement user profile editing and avatar upload functionality',
    assignedTo: 6,
    status: 'pending',
    priority: 'medium',
    dueDate: '2024-02-10',
    createdAt: '2024-01-15',
    estimatedHours: 8
  }
];

export const getDashboardStats = (): DashboardStats => {
  const today = new Date();
  const overdueTasks = mockTasks.filter(task => new Date(task.dueDate) < today && task.status !== 'completed');
  
  return {
    totalEmployees: mockEmployees.length,
    totalTasks: mockTasks.length,
    completedTasks: mockTasks.filter(task => task.status === 'completed').length,
    pendingTasks: mockTasks.filter(task => task.status === 'pending' || task.status === 'in progress').length,
    overdueTasks: overdueTasks.length
  };
};
