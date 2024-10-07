// src/types/express.d.ts (or any path you prefer for custom types)
import { Request } from 'express';

declare module 'express' {
  export interface Request {
    isAuthenticated?: () => boolean;  // Add your method signature here
    user?: {
        id: string;
        email: string;
    }
  }
}
