modelFiles = {
    src : [

        'src/modules/form/module.js',
        'src/modules/form/{,**/}*.js',

        'src/modules/render/module.js',
        'src/modules/render/{,**/}*.js',

        'src/module.js',
        'src/models/{,**/}*.js',
        'src/services/{,**/}*.js'
    ]
};

if (exports) {
    exports.files       = modelFiles;
}