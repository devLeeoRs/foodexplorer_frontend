import {
  Body,
  Container,
  Main,
  UserAddress,
  UserDetails,
  UserProfile,
  InputLabel,
  MenuControls,
} from "./styles";
import { useState } from "react";
import avatarDefault from "../../assets/avatar.png";
import AddButton from "../../components/AddButton";
import { HiOutlineCamera } from "react-icons/hi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [stage, setStage] = useState(0);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone || "");
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [cpf, setCpf] = useState(user.cpf || "");
  const [birth, setBirth] = useState(user.birth_date || "");
  const [address, setAddress] = useState(user.address || "");
  const [addressNumber, setAddressNumber] = useState(user.address_number || "");
  const [area, setArea] = useState(user.address_area || "");
  const [city, setCity] = useState(user.city || "");
  const [zipCode, setZipCode] = useState(user.zip_code || "");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/uploads/${user.avatar}`
    : avatarDefault;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, serAvatarFile] = useState(null);

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    serAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
      phone,
      cpf,
      birth_date: birth,
      address,
      address_number: addressNumber,
      address_area: area,
      city,
      zip_code: zipCode,
    };

    await updateProfile({ user, avatarFile });
  }

  function advanceStage() {
    if (stage === 2) {
      return;
    }

    setStage((prev) => prev + 1);
  }

  function backStage() {
    if (stage === 0) {
      return;
    }

    setStage((prev) => prev - 1);
  }

  return (
    <Body>
      <Header />
      <Main>
        <Container>
          <MenuControls $stage={stage}>
            {stage === 1 ? <p onClick={backStage}> &lt; Perfil </p> : <p></p>}
            {stage === 0 ? (
              <p onClick={advanceStage}>Dados Pessoais &gt; </p>
            ) : (
              ""
            )}
            {stage === 1 ? (
              <p onClick={advanceStage}>Endereço entrega &gt;</p>
            ) : (
              ""
            )}
          </MenuControls>

          <UserProfile $stage={stage}>
            <div className="image-avatar">
              <img src={avatar} alt="" />

              <div className="input-file">
                <label htmlFor="imageAvatar">
                  <HiOutlineCamera />
                </label>
                <input
                  onChange={handleChangeAvatar}
                  id="imageAvatar"
                  type="file"
                />
              </div>
            </div>
            <InputLabel>
              <label htmlFor="name">Nome </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                id="name"
                type="text"
              />
            </InputLabel>
            <InputLabel>
              <label htmlFor="email">Email </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                type="text"
              />
            </InputLabel>
            <InputLabel>
              <label htmlFor="phone">Telefone </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                id="phone"
                type="text"
              />
            </InputLabel>
          </UserProfile>
          <UserDetails $stage={stage}>
            <h2>Dados Pessoais</h2>
            <div className="divide-2">
              <InputLabel>
                <label htmlFor="old_password">Senha</label>
                <input
                  onChange={(e) => setOldPassword(e.target.value)}
                  value={oldPassword}
                  id="old_password"
                  type="password"
                />
              </InputLabel>
              <InputLabel>
                <label htmlFor="password">Nova Senha </label>
                <input
                  onChange={(e) => setNewPassword(e.target.value)}
                  value={newPassword}
                  id="password"
                  type="password"
                />
              </InputLabel>
            </div>
            <div className="divide-2">
              <InputLabel>
                <label htmlFor="cpf">CPF</label>
                <input
                  onChange={(e) => setCpf(e.target.value)}
                  value={cpf}
                  id="cpf"
                  type="text"
                />
              </InputLabel>
              <InputLabel>
                <label htmlFor="born">Data de Nascimento</label>
                <input
                  onChange={(e) => setBirth(e.target.value)}
                  value={birth}
                  id="born"
                  type="text"
                />
              </InputLabel>
            </div>
            {stage === 1 && (
              <AddButton onClick={handleUpdate} title="Salvar alteraçoes " />
            )}
          </UserDetails>
          <UserAddress $stage={stage}>
            <h2>Endereço de Entrega</h2>
            <div className="divide-2">
              <InputLabel>
                <label htmlFor="address">Endereço</label>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  placeholder="Rua Nome da Rua"
                  id="address"
                  type="text"
                />
              </InputLabel>
              <InputLabel id="address-number">
                <label htmlFor="number">Numero</label>
                <input
                  onChange={(e) => setAddressNumber(e.target.value)}
                  placeholder="123"
                  value={addressNumber}
                  id="number"
                  type="text"
                />
              </InputLabel>
            </div>
            <div className="divide-3">
              <InputLabel>
                <label htmlFor="area">Bairro</label>
                <input
                  onChange={(e) => setArea(e.target.value)}
                  value={area}
                  placeholder="Centro"
                  id="area"
                  type="text"
                />
              </InputLabel>
              <InputLabel>
                <label htmlFor="citys">Cidade</label>
                <input
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Porto-Alegre"
                  value={city}
                  id="citys"
                  type="text"
                />
              </InputLabel>
              <InputLabel>
                <label htmlFor="zips">Cep</label>
                <input
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="00.000-000"
                  value={zipCode}
                  id="zips"
                  type="text"
                />
              </InputLabel>
            </div>
            <div className="buttons">
              {stage === 2 && <AddButton onClick={backStage} title="Voltar" />}
              <AddButton onClick={handleUpdate} title="Salvar alteraçoes " />
            </div>
          </UserAddress>
        </Container>
      </Main>
      <Footer />
    </Body>
  );
}
