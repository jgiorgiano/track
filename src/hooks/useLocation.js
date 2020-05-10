import {useEffect, useState} from 'react';
import {
    requestPermissionsAsync,
    watchPositionAsync,
    Accuracy
} from "expo-location";

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);

    useEffect(() => {
        let subscriber;

        const startWatching = async () => {
            try {
                const result = await requestPermissionsAsync();

                if (!result.granted) {
                    setErr(result);
                }

                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, (location) => {
                    callback(location);
                });

            } catch (err) {
                setErr(err);
            }
        }

        if (shouldTrack) {
            startWatching();
        } else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }

        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };

    }, [shouldTrack, callback]);

    return [err];
}
