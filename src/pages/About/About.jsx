import './index.css'
import React from 'react';

const About = () => {
    return (

        <div className="md:px-10 mt-4">
            <div className="container mx-auto mt-8 bg-indigo-500 rounded-xl md:px-10">
                <h1 className="text-3xl text-white font-bold mb-4">About Us</h1>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, diam sit amet
                    dictum dapibus, est arcu fermentum justo, a varius ligula odio nec lectus. Duis vel nisl
                    libero. Integer non ultricies libero. Vestibulum at sapien vitae tortor tincidunt
                    condimentum nec id eros. Proin non turpis sit amet arcu consectetur sollicitudin ut ut
                    odio.
                </p>
                <p className="mb-4">
                    Vestibulum consectetur purus sit amet magna condimentum, quis vehicula lorem mattis. Nam
                    sit amet tempor nisi. Curabitur hendrerit libero quis quam tincidunt congue. Vivamus
                    ultricies, libero vel rutrum tristique, felis ipsum laoreet neque, sit amet ultricies
                    tellus ligula vel metus.
                </p>
                <p className="mb-4">
                    Donec luctus, urna et volutpat ullamcorper, nulla ligula aliquet sem, at rutrum lacus
                    tortor ut mi. Vestibulum feugiat eros eget malesuada rutrum. Aliquam erat volutpat. Sed
                    finibus pulvinar augue, sed pretium tortor vehicula nec. Fusce nec nulla vitae nisl
                    dignissim congue.
                </p>
            </div>
        </div>

    );
};

export default About;
