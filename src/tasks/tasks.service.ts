import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private items: string[] = [];

  addItem(item: string): void {
    this.items.push(item);
  }

  getItems(): string[] {
    return this.items;
  }
}
