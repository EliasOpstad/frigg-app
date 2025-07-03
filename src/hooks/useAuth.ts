import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';

interface AuthState{
    user: User | null;
    initializing: boolean;
}

export default function useAuth(): AuthState{
    const [user, setUser] = useState<User | null>(null);
    const [initializing, setInitializing] = useState(true);
    
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged (auth, (firebaseUser) => {
            setUser(firebaseUser);
            if (initializing) setInitializing(false);
        });
        return unsubscribe;
    }, [initializing]);

    return { user, initializing };
}