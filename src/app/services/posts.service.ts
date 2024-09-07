import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Post } from '../models/post';
import { catchError, map, Observable, of } from 'rxjs';
import * as firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs: AngularFirestore) { }




  loadFeaturedData(): Observable<Array<{ id: string, data: Post }>> {
    return this.afs.collection('posts', ref=>ref.where('isFeatured', '==', true).limit(4)).snapshotChanges().pipe(
      map((actions: any[]) => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      }),
      catchError(error => {
        console.error('Error loading posts:', error);
        return of([]); // Return an empty array in case of error
      })
    );
  }
  
loadLatest(){
  return this.afs.collection('posts', ref=>ref.orderBy('createdAt')).snapshotChanges().pipe(
    map((actions: any[]) => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, data };
      });
    }),
    catchError(error => {
      console.error('Error loading posts:', error);
      return of([]); 
    })
  );
}

loadCategoryPosts(categoryId: any){
  return this.afs.collection('posts', ref=>ref.where('category.categoryId', '==', categoryId).limit(4)).snapshotChanges().pipe(
    map((actions: any[]) => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, data };
      });
    }),
    catchError(error => {
      console.error('Error loading posts:', error);
      return of([]); 
    })
  );
}

loadSinglePost(postId: any){
return this.afs.doc(`posts/${postId}`).valueChanges();
}

loadSimilarPosts(catId: any){
  return this.afs.collection('posts', ref=>ref.where('category.categoryId', '==', catId).limit(4)).snapshotChanges().pipe(
    map((actions: any[]) => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, data };
      });
    }),
    catchError(error => {
      console.error('Error loading posts:', error);
      return of([]); 
    })
  );
}
  
countViews(postId: any){
  const viewsCount = {
    views: firebase.default.firestore.FieldValue.increment(1)
  }
this.afs.doc(`posts/${postId}`).update(viewsCount).then (()=>{
  console.log('Updated views count:', viewsCount);
})
}
}
