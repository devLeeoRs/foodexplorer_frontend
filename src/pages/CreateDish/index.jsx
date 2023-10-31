import { Body, Container, Main, BackButton, Form, Button } from "./styles";
import { NewIngredient } from "../../components/NewIngredient";
import { PiCaretLeftBold } from "react-icons/pi";
import { FiUpload } from "react-icons/FI";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAlert } from "../../hooks/alertNotification";
import { toast } from "react-toastify";

export function CreateDish() {
  const navigate = useNavigate();
  const alertNotification = useAlert();
  const imageButton = useRef();

  function handleBack() {
    navigate(-1);
  }

  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredients] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (file) {
      imageButton.current.style.background = "#b3093f";
      alertNotification("Imagem Carregada ", "success");
    }
  }, [file]);

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

  function handleUploadImage(e) {
    const fileUpload = e.target.files[0];
    setFile(fileUpload);

    const imagePreview = URL.createObjectURL(fileUpload);
    setImagePreview(imagePreview);
  }

  async function handleRegisterDish() {
    const [, priceNumber] = price.split("R$");

    if ((!name, !price, !description)) {
      alertNotification("Preencha os campos Nome, Preço, Descrição ", "error");
    }

    const dish = await api.post("/dishes", {
      name,
      description,
      price: priceNumber,
      stock_qtd: 2,
      ingredients,
      category,
    });

    const { dish_id } = dish.data;
    alertNotification("Prato cadastrado com sucesso ", "success");

    if (file) {
      const fileUploadForm = new FormData();
      fileUploadForm.append("upload", file);

      await api.patch(`/upload/dishPhoto/${dish_id}`, fileUploadForm);
    }

    navigate("/");
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

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <BackButton onClick={handleBack}>
            <PiCaretLeftBold />
            Voltar
          </BackButton>

          <div className="title">
            <h2>Adicionar prato</h2>
          </div>
          <Form>
            <div className=" input-file">
              <label htmlFor="">Foto do Produto</label>
              <div ref={imageButton} className="input">
                <label id="photoinput">
                  <FiUpload />
                  Selecione imagem
                  <input
                    accept="image/*"
                    onChange={handleUploadImage}
                    id="dishfile"
                    type="file"
                  />
                </label>
              </div>
            </div>
            <div className="input-name">
              <label htmlFor="name">Nome</label>
              <div className="input">
                <input
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  type="text"
                  placeholder="Ex.: Salada Ceasar"
                  className="input-pattern "
                />
              </div>
            </div>
            <div className="input-category">
              <label htmlFor="">Categoria</label>
              <select
                className="input"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                name=""
                id="category"
              >
                <option value="default">Selecione uma categoria</option>
                <option value="refeiçoes">Refeiçoes</option>
                <option value="sobremesas">Sobremas</option>
                <option value="bebidas">Bebidas</option>
              </select>
            </div>
            <div className="input-ingredients">
              <label htmlFor="">Ingredients</label>
              <div id="ingredients" className="input">
                <NewIngredient
                  IsNew
                  onClick={handleAddIngredient}
                  value={newIngredient}
                  onChange={(e) => setNewIngredients(e.target.value)}
                />
                {ingredients.map((ingredient, index) => (
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
                onChange={handleChangePrice}
                id="price"
                type="text"
                value={price}
                placeholder="R$ 00,00"
                className="input"
              />
            </div>
            <div className="input-description">
              <label htmlFor="description">Descrição</label>
              <div className="input">
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  name=""
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
              <Button type="button" onClick={handleRegisterDish}>
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
