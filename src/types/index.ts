export interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
  hireDate: string;
  phone: string;
  avatar: string;
  status: 'active' | 'inactive';
}

export interface Task {
  id: number;
  title: string;
  description: string;
  assignedTo: number;
  status: 'pending' | 'in progress' | 'completed' | 'on hold';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  createdAt: string;
  estimatedHours: number;
  actualHours?: number;
}

export interface DashboardStats {
  totalEmployees: number;
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
  overdueTasks: number;
}
