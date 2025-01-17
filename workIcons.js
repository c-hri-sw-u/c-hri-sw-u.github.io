

function createShape(shapeType, fill, isDashed, skewed) {
    // 确保使用当前活动的Paper.js作用域
    const Path = paper.Path;
    const Point = paper.Point;
    
    // 根据页面设置不同的尺寸
    const isMapPage = window.location.pathname.includes('index.html');
    const size = isMapPage ? 32 : 18;
    const starSize = size * 1.4;
    const roundedStarSize = size * 1.18;
    
    let shape;

    switch(shapeType) {
        case 'circle':
            shape = new Path.Circle({
                center: new Point(0, 0),
                radius: size/2
            });
            break;
        case 'triangle':
            shape = new Path.RegularPolygon({
                center: [0, 0],
                sides: 3,
                radius: starSize/2
            });
            break;
        case 'square':
            shape = new Path.Rectangle({
                point: [-size/2, -size/2],
                size: [size, size]
            });
            break;
        case 'diamond':
            const diamondSize = size * 0.86;
            shape = new Path.Rectangle({
                point: [-diamondSize/2, -diamondSize/2],
                size: [diamondSize, diamondSize]
            });
            shape.rotate(45);
            break;
        case 'hexagon':
            shape = new Path.RegularPolygon({
                center: [0, 0],
                sides: 6,
                radius: size/2 * 1.1
            });
            shape.rotate(30); // 添加30度旋转
            break;
        case 'octagon':
            shape = new Path.RegularPolygon({
                center: [0, 0],
                sides: 8,
                radius: size/2 * 1.1
            });
            break;
        
        case 'star3':
            shape = new Path.Star({
                center: [0, 0],
                points: 3,
                radius1: starSize/2 * 0.5,
                radius2: starSize/2
            });
            break;
        
        case 'star4':
            shape = new Path.Star({
                center: [0, 0],
                points: 4,
                radius1: starSize/2 * 0.5,
                radius2: starSize/2
            });
            break;
        case 'star4rotated':
            shape = new Path.Star({
                center: [0, 0],
                points: 4,
                radius1: starSize/2 * 0.5,
                radius2: starSize/2
            });
            shape.rotate(45);
            break;
        case 'star6':
            shape = new Path.Star({
                center: [0, 0],
                points: 6,
                radius1: starSize/2 * 0.5,
                radius2: starSize/2
            });
            break;
        case 'star8':
            shape = new Path.Star({
                center: [0, 0],
                points: 8,
                radius1: starSize/2 * 0.5,
                radius2: starSize/2
            });
            shape.rotate(22.5); // 添加22.5度旋转
            break;

        case 'star3rounded':
            shape = new Path.Star({
                center: [0, -8],
                points: 3,
                radius1: starSize/2 * 0.6 * 0.9,
                radius2: starSize/2 * 0.9
            });
            shape.rotate(180);
            shape.smooth();
            break;

        case 'star4rounded':
            shape = new Path.Star({
                center: [0, 0],
                points: 4,
                radius1: roundedStarSize/2 * 0.8,
                radius2: roundedStarSize/2
            });
            shape.smooth();
            break;
        case 'star4rotatedRounded':
            shape = new Path.Star({
                center: [0, 0],
                points: 4,
                radius1: roundedStarSize/2 * 0.8,
                radius2: roundedStarSize/2
            });
            shape.rotate(45);
            shape.smooth();
            break;
        case 'star6rounded':
            shape = new Path.Star({
                center: [0, 0],
                points: 6,
                radius1: roundedStarSize/2 * 0.8,
                radius2: roundedStarSize/2
            });
            shape.smooth();
            break;
        case 'star8rounded':
            shape = new Path.Star({
                center: [0, 0],
                points: 8,
                radius1: roundedStarSize/2 * 0.8,
                radius2: roundedStarSize/2
            });
            shape.rotate(22.5); // 添加22.5度旋转
            shape.smooth();
            break;
    }

    // 通用属性
    shape.fillColor = fill;
    shape.strokeColor = 'black';
    shape.strokeWidth = 1;
    if (isDashed) {
        shape.dashArray = [3, 3];
    }
    // 添加skew变换
    if (skewed) {
        const matrix = new Matrix();
        matrix.skew(20, 0, shape.position);
        shape.transform(matrix);
    }

    return shape;
}
