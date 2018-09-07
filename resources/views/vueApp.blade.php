<DOCTYPE html>
    <html lang="{{ app()->getLocale() }}">
        <head>
            <title>{{config('app.name', 'Laravel')}}</title>
            <link href="{{asset('css/app.css')}}" rel="stylesheet">
        </head>
    <body>
        <div class="container">
            <h1>VueJs Crud</h1>
        </div>

        <section id="app"></section>

        <script>
            window.laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
            ]) ?>
        </script>
        <script src="{{asset('js/app.js')}}"></script>
    </body>
    </html>
</DOCTYPE>
