import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';

const PusherComponent = ({ channel, event, onMessage }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Replace with your actual Pusher App Key and Cluster ID
        const pusher = new Pusher('2c50447b9a6ca009a1ec', {
            cluster: 'ap2'
        });


        const subscription = pusher.subscribe(channel);

        subscription.bind(event, (message) => {
            setData(message);
            if (onMessage) {
                onMessage(message); // Call the provided callback function
            }
        });

        // Clean up subscription on component unmount
        return () => subscription.unsubscribe();
    }, [channel, event, onMessage]);

    console.log(data, 'dataaa')
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