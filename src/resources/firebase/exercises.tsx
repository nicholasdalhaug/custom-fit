import { useState, useEffect } from 'react';
import firebase from './firebase';

export interface Exercise { 
    name: string, 
    reps: number, 
    sets: number, 
    pause: number, 
    increment: number, 
    weight: number
}

interface ExerciseDoc extends Exercise {
    uid: string
}

export interface StoredExercise {
    id: string,
    exercise: Exercise
}

export const useStoredExercises = () => {
    const [exercises, setExercises] = useState(undefined as unknown as StoredExercise[]);
    
    useEffect(() => {
        const user = firebase.auth().currentUser;
        if(user !== null){
            const unsubscribe = firebase
                .firestore()
                .collection('exercises')
                .where('uid', '==', user.uid)
                .onSnapshot((snapshot) => {
                    const exercises: StoredExercise[] = snapshot.docs.map((doc) => {
                        return {
                            id: doc.id, 
                            exercise: doc.data()
                        } as StoredExercise
                    })

                    setExercises(exercises);
                })
            return () => unsubscribe();
        }
    }, [])

    return exercises; 
}

export const addExerciseToStore = (exercise: Exercise) => {
    const user = firebase.auth().currentUser;
    if(user !== null){
        const exerciseDoc: ExerciseDoc = {
            ...exercise,
            uid: user.uid
        }
        return firebase
            .firestore()
            .collection('exercises')
            .add(exerciseDoc)
    }
}

export const editExerciseInStore = (storedExercise: StoredExercise) => {
    const user = firebase.auth().currentUser;
    if(user !== null){
        const exerciseDoc: ExerciseDoc = {
            ...storedExercise.exercise,
            uid: user.uid
        }
        return firebase
            .firestore()
            .collection("exercises")
            .doc(storedExercise.id)
            .update(exerciseDoc)
    }
}

export const deleteExerciseFromStore = (storedExercise: StoredExercise) => {
    const user = firebase.auth().currentUser;
    if(user !== null){
        return firebase
            .firestore()
            .collection("exercises")
            .doc(storedExercise.id)
            .delete()
    }
}
