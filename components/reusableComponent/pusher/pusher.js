import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';

const PusherComponent = ({ channel, event, onMessage }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Request notification permission when the component mounts
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        }

        // Initialize Pusher
        const pusher = new Pusher('2c50447b9a6ca009a1ec', {
            cluster: 'ap2'
        });

        const subscription = pusher.subscribe(channel);

        subscription.bind(event, (message) => {
            setData(message);
            if (onMessage) {
                onMessage(message); // Call the provided callback function
            }

            // Trigger a notification when a new message is received
            if (Notification.permission === "granted") {
                new Notification("New Message Received", {
                    body: JSON.stringify(message),
                    icon: '/path/to/icon.png' // Optional: add path to a notification icon
                });
            }
        });

        // Clean up subscription on component unmount
        return () => {
            subscription.unsubscribe();
            pusher.disconnect();
        };
    }, [channel, event, onMessage]);

    return (
        <div>
            {data ? (
                <p>Received message: {JSON.stringify(data)}</p>
            ) : (
                <p>Waiting for messages...</p>
            )}
        </div>
    );
};

export default PusherComponent;