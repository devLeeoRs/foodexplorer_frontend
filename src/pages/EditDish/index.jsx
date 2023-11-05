import { Body, Container, Main, BackButton, Form, Button } from "./styles";
import { NewIngredient } from "../../components/NewIngredient";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link, useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState, useRef } from "react";
import { useAlert } from "../../hooks/alertNotification";
import { toast } from "react-toastify";

export function EditDish() {
  const navigate = useNavigate();
  const params = useParams();
  const AlertNotification = useAlert();
  const imageButton = useRef();

  function maskPrice(value) {
    const numericValue = value.replace(/\D/g, "");

    const formattedPrice = Number(numericValue / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return formattedPrice;
  }

  function handleChangePrice(e) {
    const inputValue = e.target.value;
    const maskedValue = maskPrice(inputValue);

    setPrice(maskedValue);
  }

  function handleAddIngredient() {
    const checkIsExistIngredient = ingredients.includes(newIngredient);
    if (!newIngredient) {
      return toast.info("Ingrediente vazio ");
    }
    if (checkIsExistIngredient) {
      return toast.info("Ingrediente Ja adicionado");
    }

    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredients("");
  }
  function handleRemoveIngredient(remove) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== remove)
    );
  }

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredients] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);

  function handleUploadImage(e) {
    const fileUpload = e.target.files[0];
    setFile(fileUpload);

    const imagePreview = URL.createObjectURL(fileUpload);
    setImagePreview(imagePreview);
  }

  async function handleUpdateDish() {
    const [, priceNumber] = price.split("R$");
    try {
      await api.put(`/dishes/${params.id}`, {
        name,
        price: priceNumber,
        description,
        ingredients,
      });

      AlertNotification("Prato Atualizado", "success");
      navigate("/");
    } catch (error) {
      AlertNotification("Algo deu Errado", "error");
    }

    if (file) {
      const fileUploadForm = new FormData();
      fileUploadForm.append("upload", file);

      await api.patch(`/upload/dishPhoto/${params.id}`, fileUploadForm);
    }
  }

  useEffect(() => {
    if (file) {
      imageButton.current.style.background = "#b3093f";
      AlertNotification("Imagem Carregada ", "success");
    }
  }, [file]);

  useEffect(() => {
    async function loadingDishe() {
      const { data } = await api.get(`/dishes/dish/${params.id}`);
      setName(data.name);
      setPrice(`R$ ${data.price}`);
      setIngredients(data.ingredients);
      setDescription(data.description);
      setCategory(data.category);
      setImagePreview(`${api.defaults.baseURL}/uploads/${data.photo_url}`);
    }
    loadingDishe();
  }, [params]);

  function handleBack() {
    navigate("/");
  }

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <Link to="/">
            <BackButton onClick={handleBack}>
              <PiCaretLeftBold />
              Voltar
            </BackButton>
          </Link>

          <div className="title">
            <h2>Editar Prato</h2>
          </div>
          <Form>
            <div className=" input-file">
              <label htmlFor="">Foto do Produto</label>
              <div ref={imageButton} className="input">
                <label id="photoinput">
                  <AiOutlineCloudUpload />
                  Selecione imagem
                  <input
                    id="dishfile"
                    type="file"
                    onChange={handleUploadImage}
                  />
                </label>
              </div>
            </div>
            <div className="input-name">
              <label htmlFor="name">Nome</label>
              <div className="input">
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex.: Salada Ceasar"
                  className="input-pattern "
                />
              </div>
            </div>
            <div className="input-category">
              <label htmlFor="">Categoria</label>
              <select
                className="input"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                name=""
                id="category"
              >
                <option value="default">Selecione uma categoria</option>
                <option value="refeiçoes">Refeiçoes</option>
                <option value="bebidas">Bebidas</option>
                <option value="sobremesas">Sobremesa</option>
              </select>
            </div>
            <div className="input-ingredients">
              <label htmlFor="">Ingredients</label>
              <div id="ingredients" className="input">
                <NewIngredient
                  IsNew
                  value={newIngredient}
                  onClick={handleAddIngredient}
                  onChange={(e) => setNewIngredients(e.target.value)}
                />
                {ingredients &&
                  ingredients.map((ingredient, index) => (
                    <NewIngredient
                      onClick={() => handleRemoveIngredient(ingredient)}
                      value={ingredient}
                      key={index}
                    />
                  ))}
              </div>
            </div>
            <div className="input-price">
              <label htmlFor="price">Preço</label>
              <input
                id="price"
                type="text"
                value={price}
                onChange={handleChangePrice}
                placeholder="R$ 00,00"
                className="input"
              />
            </div>
            <div className="input-description">
              <label htmlFor="description">Descrição</label>
              <div className="input">
                <textarea
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  name=""
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="photo-preview">
              <label htmlFor="">Foto Preview</label>
              <div className="input">
                <img src={imagePreview} alt="" />
              </div>
            </div>
            <div className="buttons">
              <Button $dark={true}>Excluir prato</Button>
              <Button type="button" onClick={handleUpdateDish}>
                Salvar Alteraçoes
              </Button>
            </div>
          </Form>
        </Container>
      </Main>
      <Footer />
    </Body>
  );
}
