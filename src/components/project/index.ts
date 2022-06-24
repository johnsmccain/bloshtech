import BT_Forklift from '../../videos/BT_Forklift_1.webm'
import BT_Robotics_maze_mission from '../../videos/BT_Robotics_maze_mission.webm'
import coding_class from '../../videos/coding_class.mp4'
import Dancer_robot from '../../videos/Dancer_robot.mp4';
import OBJECT_AVOIDANCE from '../../videos/OBJECT_AVOIDANCE.mp4';

import g11 from '../../images/g12.png'
import g26 from '../../images/g27.png'
import g1 from '../../images/gallery2.png'
import g4 from '../../images/g5.png'
import b8 from '../../images/b8.png'
export const videos =[
    {
        id:1,
        vid: BT_Forklift,
        name:"Forklift",
        poster:g4
    },
    {
        id:2,
        // vid:'https://bloshtech.s3.eu-west-2.amazonaws.com/videos/BT_Robotics_maze_mission.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCWV1LXdlc3QtMyJIMEYCIQDzzjhPq7qvLtO13gqHym%2FDtSGyDosbPXAAR6s7pTUSkgIhAOAuf1ArC7fzPrZuWew7rgnIvJLEqKXAAeNQd4M26T6AKvsCCEkQARoMMTM2NzMxNzE1ODg3Igx2O7UJSnRD5hOXMy4q2AIoDC1lZO5l%2BP%2FmnGhSqn9Z%2B4FLWSkuyo3IYn2rWqPJNb5XjUAzrMYZXLjDwK%2Byey2J0OlUxPxMxuAM%2FX3GKCQsvnjP5ld8Xpmfc%2B%2FT%2F1aE59q9cI99WiizMIIDUSwxA9MEtSpBM7WV%2FKd19hzzeVOwaE1eoPfGLM5QO5PrpaSlDjSucUXHw2LZcsDRhKB8al%2BmyzEOTQuzE9GpT7IwOJzWuQR1hKjwzsiumQwgOnVHbhTbYAAjIjjAUITQJmtOrTc8GfTSkAhdAEhgequP3XfrOpTx1cdJzvSuBjs4yIcrZQSGhca1G3%2BP9cPByS3XCiiJukpgVoi%2FjyHHbUpVnPpQraWnpK4Myo1uFssEiF%2BOwkXmymIRbSJ3Uw9itHtmCrIpypkjykWXJOtDSrLMgchS0fH4PZracaAlPxB5%2FoGy9RbLXiipuS4x1qjx325EvFw%2BuG2YXWpx3DCUp8eVBjqyApdv0YnmS%2FtstthaJmcXDsQi6u4N8uWTQ0GUKXOOd%2Fx8JFUM3FmEF4kpvTOe%2BaXPeyv4a9M8OPKsKIyJwdJ%2FvgoNev8gfoO8IKnKoR7%2BQyIgucb17skL70Ia84Yd80viBGzm9LiByG1Kib%2BqFm1NxAtSavClgg414otQ%2FHSHEakpIe74kdLo%2FNWDxcIoOx6wYTXfwuL5TgANd%2FIfsOSN%2BNFs0mveUlZ4FDYjzyfQEvH0OBxYlHBsXRqlO5P4D7okTqemOSgWWacQGA7I4OFgtRxqRAjAWA8j4Tb%2Fr0A%2FozPoCwBaNXlo7yMJPzSTAa6gBUrv2PDAB4szDpCcqh4k1d9FCPP7we3KAyiCY9AY%2BFhwSUGk2bdG53tmInz2ZztZN58GS2vnr9LI8NIz2yPYFf0KeQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220621T162551Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR7VOYNEXX3ZFDOCO%2F20220621%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=daae7fceff4669d1a66cf0d47ecfb7cb8fd2b75a266451b4b95677dfc6e02055',
        vid: BT_Robotics_maze_mission,
        name:"Robotics maze mission",
        poster:b8
    },
    {
        id:3,
        // vid:'https://bloshtech.s3.eu-west-2.amazonaws.com/videos/coding_class.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCWV1LXdlc3QtMyJIMEYCIQDzzjhPq7qvLtO13gqHym%2FDtSGyDosbPXAAR6s7pTUSkgIhAOAuf1ArC7fzPrZuWew7rgnIvJLEqKXAAeNQd4M26T6AKvsCCEkQARoMMTM2NzMxNzE1ODg3Igx2O7UJSnRD5hOXMy4q2AIoDC1lZO5l%2BP%2FmnGhSqn9Z%2B4FLWSkuyo3IYn2rWqPJNb5XjUAzrMYZXLjDwK%2Byey2J0OlUxPxMxuAM%2FX3GKCQsvnjP5ld8Xpmfc%2B%2FT%2F1aE59q9cI99WiizMIIDUSwxA9MEtSpBM7WV%2FKd19hzzeVOwaE1eoPfGLM5QO5PrpaSlDjSucUXHw2LZcsDRhKB8al%2BmyzEOTQuzE9GpT7IwOJzWuQR1hKjwzsiumQwgOnVHbhTbYAAjIjjAUITQJmtOrTc8GfTSkAhdAEhgequP3XfrOpTx1cdJzvSuBjs4yIcrZQSGhca1G3%2BP9cPByS3XCiiJukpgVoi%2FjyHHbUpVnPpQraWnpK4Myo1uFssEiF%2BOwkXmymIRbSJ3Uw9itHtmCrIpypkjykWXJOtDSrLMgchS0fH4PZracaAlPxB5%2FoGy9RbLXiipuS4x1qjx325EvFw%2BuG2YXWpx3DCUp8eVBjqyApdv0YnmS%2FtstthaJmcXDsQi6u4N8uWTQ0GUKXOOd%2Fx8JFUM3FmEF4kpvTOe%2BaXPeyv4a9M8OPKsKIyJwdJ%2FvgoNev8gfoO8IKnKoR7%2BQyIgucb17skL70Ia84Yd80viBGzm9LiByG1Kib%2BqFm1NxAtSavClgg414otQ%2FHSHEakpIe74kdLo%2FNWDxcIoOx6wYTXfwuL5TgANd%2FIfsOSN%2BNFs0mveUlZ4FDYjzyfQEvH0OBxYlHBsXRqlO5P4D7okTqemOSgWWacQGA7I4OFgtRxqRAjAWA8j4Tb%2Fr0A%2FozPoCwBaNXlo7yMJPzSTAa6gBUrv2PDAB4szDpCcqh4k1d9FCPP7we3KAyiCY9AY%2BFhwSUGk2bdG53tmInz2ZztZN58GS2vnr9LI8NIz2yPYFf0KeQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220621T162650Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR7VOYNEXX3ZFDOCO%2F20220621%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=5780521cc43f7ac52be5fa2fa9bb935cf8452362dd5ee4177a6afa3667a4d25c',
        vid: coding_class,
        name:"coding class",
        poster:g11
    },
    {
        id:4,
        // vid:'https://bloshtech.s3.eu-west-2.amazonaws.com/videos/Dancer_robot.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCWV1LXdlc3QtMyJIMEYCIQDzzjhPq7qvLtO13gqHym%2FDtSGyDosbPXAAR6s7pTUSkgIhAOAuf1ArC7fzPrZuWew7rgnIvJLEqKXAAeNQd4M26T6AKvsCCEkQARoMMTM2NzMxNzE1ODg3Igx2O7UJSnRD5hOXMy4q2AIoDC1lZO5l%2BP%2FmnGhSqn9Z%2B4FLWSkuyo3IYn2rWqPJNb5XjUAzrMYZXLjDwK%2Byey2J0OlUxPxMxuAM%2FX3GKCQsvnjP5ld8Xpmfc%2B%2FT%2F1aE59q9cI99WiizMIIDUSwxA9MEtSpBM7WV%2FKd19hzzeVOwaE1eoPfGLM5QO5PrpaSlDjSucUXHw2LZcsDRhKB8al%2BmyzEOTQuzE9GpT7IwOJzWuQR1hKjwzsiumQwgOnVHbhTbYAAjIjjAUITQJmtOrTc8GfTSkAhdAEhgequP3XfrOpTx1cdJzvSuBjs4yIcrZQSGhca1G3%2BP9cPByS3XCiiJukpgVoi%2FjyHHbUpVnPpQraWnpK4Myo1uFssEiF%2BOwkXmymIRbSJ3Uw9itHtmCrIpypkjykWXJOtDSrLMgchS0fH4PZracaAlPxB5%2FoGy9RbLXiipuS4x1qjx325EvFw%2BuG2YXWpx3DCUp8eVBjqyApdv0YnmS%2FtstthaJmcXDsQi6u4N8uWTQ0GUKXOOd%2Fx8JFUM3FmEF4kpvTOe%2BaXPeyv4a9M8OPKsKIyJwdJ%2FvgoNev8gfoO8IKnKoR7%2BQyIgucb17skL70Ia84Yd80viBGzm9LiByG1Kib%2BqFm1NxAtSavClgg414otQ%2FHSHEakpIe74kdLo%2FNWDxcIoOx6wYTXfwuL5TgANd%2FIfsOSN%2BNFs0mveUlZ4FDYjzyfQEvH0OBxYlHBsXRqlO5P4D7okTqemOSgWWacQGA7I4OFgtRxqRAjAWA8j4Tb%2Fr0A%2FozPoCwBaNXlo7yMJPzSTAa6gBUrv2PDAB4szDpCcqh4k1d9FCPP7we3KAyiCY9AY%2BFhwSUGk2bdG53tmInz2ZztZN58GS2vnr9LI8NIz2yPYFf0KeQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220621T162742Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR7VOYNEXX3ZFDOCO%2F20220621%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=6de3e35fc3e4f889dfb575de01535a246a1a01a9c2084defbcbb9430b4fc5194',
        vid: Dancer_robot,
        name:"Dancer robot",
        poster:g26
    },
    {
        id:5,
        // vid: OBJECT_AVOIDANCE,
        vid:'https://bloshtech.s3.eu-west-2.amazonaws.com/videos/BT_Forklift_1.mp4',
        name:"Object avoidance",
        poster:g1
    },
]