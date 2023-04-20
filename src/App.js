import React from 'react'

function App() {
  return (
    <div className="App">
      <form action="/" enctype="multipart/form-data" onsubmit="return false;" method="post">
        <dl>
            <dt>
                <label for="FileUpload_FormFile">File</label>
            </dt>
            <dd>
                <input id="FileUpload_FormFile" type="file" name="files" />
            </dd>
        </dl>

        <input name="simple" />

        <input class="btn" type="submit" value="Upload" />

        <div>
            <output name="result"></output>
        </div>
    </form>
    </div>
  );
}

export default App;
