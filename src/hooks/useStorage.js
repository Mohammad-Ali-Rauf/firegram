import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)
    
    useEffect(() => {
        // refs
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images')

        // events
        storageRef.put(file).on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage)
        }, (error) => {
            setError(error)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            const createdAt = timestamp()
            collectionRef.add({ url, createdAt })
            setUrl(url)
        })
    }, [file])

    return { progress, url, error  }
}

export default useStorage