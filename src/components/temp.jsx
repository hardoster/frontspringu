
    <div className="flex flex-col min-h-screen w-full">
      <header className="sticky top-0 w-full ">
        <Navbar /> {/* Navbar fijo en la parte superior */}
      </header>
      <main className="flex-grow pt-16"> {/* Añade padding-top para que el contenido no quede detrás del navbar */}
        <div>
       
              <Banner /> 
        </div>
        <div className="container mx-auto p-4">
          <UserList />
        </div>




      </main>
    </div>