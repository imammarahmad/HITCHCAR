import { useState, useEffect } from 'react';
import { db, fire } from '../../FireBase/Fire';

const UseStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = fire.storage().ref();
        const fileRef = storageRef.child(file.name);
        // await fileRef.put(file);
        fileRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            await db.add({ url });
            setUrl(url);
          });
        // setFileUrl(await fileRef.getDownloadURL());
  }, [file]);

  return { progress, url };
}

export default UseStorage;