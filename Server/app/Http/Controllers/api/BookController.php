<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books = Book::all();
        return  response()->json($books,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|max:50',
            'author' => 'required|max:50',
            'releasedOn' => 'required|max:50',
            'posterUrl' => 'required',
        ]);


        $book = Book::create([
            'title' => $request->title,
            'author' => $request->author,
            'releasedOn' => $request->releasedOn,
            'posterUrl' => $request->posterUrl,
        ]);

        return response()->json(['book' => $book], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $book = Book::find($id);
        if($book == null){
          return response()->json(['error'=>'book with this Id not found'],404);
        }
        return response()->json($book,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required|max:50',
            'author' => 'required|max:50',
            'releasedOn' => 'required|max:50',
            'posterUrl' => 'required',
        ]);


        $book = Book::find($id);

        if($book == null){
            return response()->json(['error'=>'book with this Id not found'],404);
        }

        $book->title = $request->title;
        $book->author = $request->author;
        $book->releasedOn = $request->releasedOn;
        $book->posterUrl = $request->posterUrl;
        $book->save();

        return response()->json($book,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $book = Book::find($id);

        if($book == null){
            return response()->json(['error'=>'book with this Id not found'],404);
        }

        $book->delete();
        return response()->json($book, 200);
    }
}
