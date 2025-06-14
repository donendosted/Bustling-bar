import { Warp, Voronoi, GrainGradient } from '@paper-design/shaders-react';

export function Warped() {

    return <Warp colors={['#101213', '#5d9287', '#4f514d', '#101213', '#00ffaa' ]}
                softness={0}
				speed={10}
				swirl={1}
				swirlIterations={5}
				shapeScale={0.3}
                shape='checks'
                style={{ width: '100%', height: 720 }} />;

}

export function Voronoied() {
    return <Voronoi colors={['#e65a1a', '#e6c41a', '#1aace6']}
        stepsPerColor={2}
        colorGap='#000000'
        colorGlow='#ff0000'
        distortion={0.36}
        gap={0.05}
        glow={0}
        speed={1}
        scale={0.76}
        style={{width: '100%', height: 200}} />
}

export function Grain() {
    return <GrainGradient colors={['#00aeff', '#00ffcc', '#ffc800']}
            colorBack='#030f17'
            softness={0.8}
            intensity={0.15}
            noise={0.35}
            shape='corners'
            speed={1}
            worldHeight={1100}
            style={{width: '100%', height: 900}}
        />
}