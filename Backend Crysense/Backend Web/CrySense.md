Username : crysense
Password : 9SwNWfYmBzN17iOI

Connection String
mongodb+srv://crysense:9SwNWfYmBzN17iOI@crysense.08kvnay.mongodb.net/?retryWrites=true&w=majority&appName=CrySense



=======================START OF ARTICLE API=========================

API Untuk Artikel

Menampilkan Seluruh Data

GET http://localhost:3000/artikel/

Hasil Response :

{
    "fetchArtikel": [
        {
            "_id": "68295e61096ec57282648196",
            "title": "halawdawdadawdao",
            "description": "gula, guadawdawdla apa yang ij123123123o",
            "createdAt": "2025-05-18T04:13:21.402Z",
            "updatedAt": "2025-05-18T04:13:21.402Z",
            "__v": 0
        },
        
    ]
}



Menampilkan data By ID

GET http://localhost:3000/artikel/:id
id didapat dari "_id" yang digenerate pada mongodb

Hasil Response :

{
    "message": "Data Berhasil Ditemukan",
    "postArtikel": {
        "_id": "68295e61096ec57282648196",
        "title": "halawdawdadawdao",
        "description": "gula, guadawdawdla apa yang ij123123123o",
        "createdAt": "2025-05-18T04:13:21.402Z",
        "updatedAt": "2025-05-18T04:13:21.402Z",
        "__v": 0
    }
}



Melakukan Penambahan Artikel
POST http://localhost:3000/artikel

Hasil Response :

{
    "message": "Data Berhasil Ditambahkan",
    "artikelBaru": {
        "title": "awfdagfawgawgawgddd",
        "description": "1231231231231223213",
        "imageUrl": "/uploads/imgArtikel/gambarArtikel-1748347347558.jpg",
        "_id": "6835a9d3b9be6f8a452a5064",
        "createdAt": "2025-05-27T12:02:27.566Z",
        "updatedAt": "2025-05-27T12:02:27.566Z",
        "__v": 0
    }
}

hasil gambar yg diupload diletakkan pada folder "uploads/gambarArtikel"

============================END OF ARTICLE API===========================
