{
    "targets": [{
        "target_name": "unsquashfs",
        "type": "static_library",
        "sources": [
            "../squashfs-tools/unsquashfs.c",
        ],
        "cflags": [
            "-D_GNU_SOURCE",
            "-DXZ_SUPPORT"
        ],
        "link_settings": {
            "libraries": ["-lm"],
        },
        "include_dirs": [
            "../squashfs-tools/include"
        ],
        "dependencies": [
            "unsquash-1",
            "unsquash-2",
            "unsquash-3",
            "unsquash-4",
            "swap",
            "compressor",
            "unsquashfs_info",
            "xz_wrapper"
        ]
    }, {
        "target_name": "squashfs",
        "sources": ["squashfs.cpp"],
        "include_dirs": [
            "<!(node -e \"require('nan')\")",
            "../squashfs-tools/include",
        ],
        "dependencies": [
            "unsquashfs"
        ]
    }, {
        "target_name": "xz_wrapper",
        "type": "static_library",
        "link_settings": {
            "libraries": ["-lm", "-llzma"],
        },
        "sources": [
            "../squashfs-tools/xz_wrapper.c"
        ],
        "include_dirs": [
            "../squashfs-tools/include"
        ]
    }, {
        "target_name": "unsquash-1",
        "type": "static_library",
        "link_settings": {
            "libraries": ["-lm"],
        },
        "sources": [
            "../squashfs-tools/unsquash-1.c"
        ],
        "include_dirs": [
            "../squashfs-tools/include"
        ]
    }, {
        "target_name": "unsquash-2",
        "type": "static_library",
        "link_settings": {
            "libraries": ["-lm"],
        },
        "sources": [
            "../squashfs-tools/unsquash-2.c"
        ],
        "include_dirs": [
            "../squashfs-tools/include"
        ]
    }, {
        "target_name": "unsquash-3",
        "type": "static_library",
        "link_settings": {
            "libraries": ["-lm"],
        },
        "sources": [
            "../squashfs-tools/unsquash-3.c"
        ],
        "include_dirs": [
            "../squashfs-tools/include"
        ]
    }, {
        "target_name": "unsquash-4",
        "type": "static_library",
        "link_settings": {
            "libraries": ["-lm"],
        },
        "sources": [
            "../squashfs-tools/unsquash-4.c"
        ],
        "include_dirs": [
            "../squashfs-tools/include"
        ]
    }, {
        "target_name": "swap",
        "type": "static_library",
        "link_settings": {
            "libraries": ["-lm"],
        },
        "sources": [
            "../squashfs-tools/swap.c"
        ],
        "include_dirs": [
            "../squashfs-tools/include"
        ]
    }, {
        "target_name": "compressor",
        "type": "static_library",
        "link_settings": {
            "libraries": ["-lm"],
        },
        "cflags": [
            "-D_GNU_SOURCE",
            "-DXZ_SUPPORT"
        ],
        "sources": [
            "../squashfs-tools/compressor.c"
        ],
        "include_dirs": [
            "../squashfs-tools/include"
        ]
    }, {
        "target_name": "unsquashfs_info",
        "type": "static_library",
        "link_settings": {
            "libraries": ["-lm"],
        },
        "sources": [
            "../squashfs-tools/unsquashfs_info.c"
        ],
        "include_dirs": [
            "../squashfs-tools/include"
        ]
    }]
}
