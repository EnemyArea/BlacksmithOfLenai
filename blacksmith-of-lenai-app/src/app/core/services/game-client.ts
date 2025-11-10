import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GameClient {
  private httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/';

  public loadDataListFromGameApi<T>(
    endpoint: string,
    keyProperty: keyof T,
    dataCallback: (data: Record<string, T>) => void
  ): void {
    this.httpClient
      .get<T[]>(new URL(endpoint, this.baseUrl).toString())
      .subscribe(data => dataCallback(this.toDataRecord(data, keyProperty)));
  }

  private toDataRecord<T>(list: T[], keyProperty: keyof T): Record<string, T> {
    return list.reduce<Record<string, T>>((acc, item) => {
      const key = String(item[keyProperty]);
      acc[key] = item;
      return acc;
    }, {});
  }
}
