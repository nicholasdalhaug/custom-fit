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

export interface StoredExercise {
    id: string,
    exercise: Exercise
}

export const useStoredExercises = () => {
    const [exercises, setExercises] = useState(undefined as unknown as StoredExercise[]);
    
    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('exercises')
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
    }, [])

    return exercises; 
}

export const addExerciseToStore = (exercise: Exercise) => {
    return firebase
        .firestore()
        .collection('exercises')
        .add(exercise)
}

export const editExerciseInStore = (storedExercise: StoredExercise) => {
    return firebase
        .firestore()
        .collection("exercises")
        .doc(storedExercise.id)
        .update(storedExercise.exercise)
}

export const deleteExerciseFromStore = (storedExercise: StoredExercise) => {
    return firebase
        .firestore()
        .collection("exercises")
        .doc(storedExercise.id)
        .delete()
}
