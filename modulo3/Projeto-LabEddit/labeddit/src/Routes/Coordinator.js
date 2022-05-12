export const  goToLogin = (navigate) => {
    navigate("/")
}

export const goToCadastro = (navigate) => {
    navigate("/cadastro")
}

export const goToFeed = (navigate) => {
    navigate("/feed")
}

export const goToDetalhePost = (navigate, id) => {
    navigate(`/detalhepost/${id}`)
}
