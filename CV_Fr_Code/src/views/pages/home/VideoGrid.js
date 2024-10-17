import React, { useState, useRef, useEffect } from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import tradway_video from "src/assets/videos/Traditional_Way.mp4";
import cvway_video from "src/assets/videos/Career_Vidyalaya_Way.mp4";

const VideoGrid = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const videoRefs = useRef([]);

    const videos = [
        { src: tradway_video, alt: 'Video 1' },
        { src: cvway_video, alt: 'Video 2' },
    ];

    useEffect(() => {
        const currentRef = videoRefs.current[currentVideo];
        if (currentRef) {
            currentRef.muted = true; // Ensure the video is muted programmatically
            currentRef.play();
            currentRef.playbackRate = 3; // Increase video speed to 1.5x
        }
    }, [currentVideo]);

    const handleVideoEnded = () => {
        if (currentVideo === videos.length - 1) {
            // If it's the last video in the list, wait for 3 seconds before restarting
            setTimeout(() => {
                setCurrentVideo(0); // Go back to the first video
            }, 1000); // 3000 milliseconds = 3 seconds delay
        } else {
            // Otherwise, proceed to the next video immediately
            setCurrentVideo((prev) => prev + 1);
        }
    };

    return (
        <SimpleGrid columns={[1, 2]} spacing={10} mb={12}>
            {videos.map((video, index) => (
                <Box key={index} display="flex" justifyContent="center" alignItems="center">
                    <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={video.src}
                        alt={video.alt}
                        style={{ width: '100%', maxWidth: '700px', height: 'auto' }}
                        autoPlay={index === currentVideo}
                        loop={false}
                        muted
                        onEnded={handleVideoEnded}
                    />
                </Box>
            ))}
        </SimpleGrid>
    );
};

export default VideoGrid;
