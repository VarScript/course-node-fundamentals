const sharp = require('sharp');

sharp('./nebu.jpg')
    .resize(80)
    .grayscale()
    .toFile('nebulaa.jpg')