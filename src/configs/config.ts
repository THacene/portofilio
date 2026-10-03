export const siteConfig: {
    baseUrl: string;
    author: string;
    author_surname: string;
    titlePrefix: string;
    profile_image: string;
    form_id: string;
    social: {
        email: string;
        twitter: string;
        github: string;
        linkedin: string;
        blog: string;
        medium: string;
        dev: string;
        hashnode: string;
    };
    metadata: {
        description: string;
        keywords: string;
        type: string;
    };
} = {
    baseUrl: 'https://t-hacene.infy.uk',
    author: 'Touari Hacene',
    author_surname: 'Hacene',
    titlePrefix: 'Touari Hacene',
    profile_image: '/img/profile_image.jpg',
    form_id: 'https://formspree.io/f/xpqvzjpg', // Corrected placement
    social: {
        email: 'touarihacene.gmail.com',
        twitter: '',
        github: 'https://github.com/THacene',
        linkedin: 'https://www.linkedin.com/in/hacene-t/',
        blog: '',
        medium: '',
        dev: '',
        hashnode: '',
    },
    metadata: {
        description: `Hi! I'm T.hacene, specialized in System Engineering and 3D web technologies (Three.js, Cannon.js, Blender 3D). Let's connect!`,
        keywords:
            'Touari Hacene, System Engineering, Touari Hacene portfolio, Three.js, Cannon.js, Blender 3D, Web Development, System Architecture, Robotics Simulation, WebXR',
        type: 'website',
    },
};