import img from './assets/modely-hero.png';
import { ImageBlock, TitleBlock, TextBlock, TextColumnsBlock } from './classes/blocks';
import { css } from './utils';

const text = `Model Y is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 17,000 Superchargers worldwide, with six new locations opening every week`;

export const model = [
    new ImageBlock (img, {
        styles: 'display: flex; justify-content: center;',
        alt: 'My Image',
        imageStyles: 'width: 100%; height: auto;',
    }),
    new TitleBlock ('Model Y', {
        tag: 'h2',
        styles: css({
            background: 'linear-gradient(to bottom right, #07203a, #0d437e)',
            color: '#fff',
            'text-align': 'center'
        })
        // styles: 'background: linear-gradient(to bottom right, #07203a, #0d437e); color: #fff; text-align:center;'
    }),
    new TextBlock (text, {
        styles: 'background: #001939; color: white; padding-top: 10px;padding-left: 5%; padding-right: 5%;'
    }),
    new TextColumnsBlock ([
        'Like every Tesla, Model Y is designed to be the safest vehicle in its class. The low center of gravity, rigid body structure and large crumple zones provide unparalleled protection.',
        'Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick.',
        'Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road.',
        'All new Tesla cars come standard with emergency braking, collision warning, blind-spot monitoring and more. Model Y will have Full Self-Driving capability, enabling automatic driving on city streets and highways pending regulatory approval, as well as the ability to come find you anywhere in a parking lot.',
        ], {
            styles: 'background: linear-gradient(#001939, black); color: white; padding: 1rem;'
    })
]