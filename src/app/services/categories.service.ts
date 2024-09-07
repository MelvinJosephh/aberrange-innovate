import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Category, CategoryWithId } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs: AngularFirestore) { }

  loadData(): Observable<CategoryWithId[]> {
    return this.afs.collection('Blog-categories').snapshotChanges().pipe(
      map((actions: any[]) => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Category;
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );
  }



}
