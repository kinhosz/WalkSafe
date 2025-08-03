// app/routes/relatar.tsx
import { Form, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getSessionUser } from "~/utils/auth.client";
import { saveOccurrence, type Occurrence } from "~/utils/storage.client";

type FormDataShape = Omit<Occurrence, "id" | "comments" | "hasBo"> & {
  hasBo: string;
  numeroBo?: string;
  cep?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
};

const crimeOptions = ["Roubo", "Furto", "Assédio", "Agressão", "Outro"];

export default function RelatarOcorrencia() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormDataShape>({
    local: "",
    data: "",
    crime: "",
    descricao: "",
    hasBo: "Não",
    numeroBo: "",
    cep: "",
    bairro: "",
    cidade: "",
    estado: "",
  });
  const [errors, setErrors] = useState<string[]>([]);

  // Proteção de rota client‐side
  useEffect(() => {
    if (!getSessionUser()) {
      navigate("/login?redirectTo=/relatar");
    }
  }, [navigate]);

  // Quando o usuário sair do campo CEP
  const handleCepBlur = async () => {
    const rawCep = form.cep?.replace(/\D/g, "");
    if (!rawCep || rawCep.length !== 8) return;

    try {
      const res = await fetch(`https://viacep.com.br/ws/${rawCep}/json/`);
      const data = await res.json();
      if (data.erro) throw new Error("CEP não encontrado");

      setForm((f) => ({
        ...f,
        local: data.logradouro || f.local,
        bairro: data.bairro || "",
        cidade: data.localidade || "",
        estado: data.uf || "",
      }));
    } catch {
      setErrors((e) => [...e.filter((msg) => !msg.startsWith("CEP")), "CEP não encontrado ou inválido."]);
    }
  };

  // Função de validação
  const validate = (d: FormDataShape): string[] => {
    const errs: string[] = [];

    if (!d.local || d.local.trim().length < 5) {
      errs.push("📍 O local deve ter ao menos 5 caracteres.");
    }

    const dt = new Date(d.data);
    if (isNaN(dt.getTime())) {
      errs.push("📅 Data inválida.");
    } else if (dt > new Date()) {
      errs.push("📅 A data não pode ser no futuro.");
    }

    if (!crimeOptions.includes(d.crime)) {
      errs.push("🚨 Selecione um tipo de crime válido.");
    }

    if (!d.descricao || d.descricao.trim().length < 10) {
      errs.push("📝 A descrição deve ter ao menos 10 caracteres.");
    }

    if (d.hasBo === "Sim" && d.numeroBo?.trim()) {
      const boRegex = /^\d{4}-\d{6}-\d{2}$/;
      if (!boRegex.test(d.numeroBo.trim())) {
        errs.push("📎 Número do BO deve ser YYYY-######-## (ex: 2025-000123-01).");
      }
    }

    if (d.cep && !/^\d{8}$/.test(d.cep.replace(/\D/g, ""))) {
      errs.push("📮 CEP deve ter 8 dígitos numéricos.");
    }

    return errs;
  };

  // Handler de mudança em qualquer campo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // limpa erro de CEP se usuário editar
    if (name === "cep") setErrors((errs) => errs.filter((msg) => !msg.startsWith("📮") && !msg.startsWith("CEP")));
  };

  // Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fieldErrors = validate(form);
    if (fieldErrors.length) {
      setErrors(fieldErrors);
      return;
    }
    setErrors([]);

    const payload: Omit<Occurrence, "id" | "comments"> = {
      local: form.local,
      data: form.data,
      crime: form.crime,
      descricao: form.descricao,
      hasBo: form.hasBo === "Sim",
      numeroBo: form.numeroBo,
      // extras não salvos em Occurrence mas podem ser úteis:
      // cep: form.cep, bairro: form.bairro, cidade: form.cidade, estado: form.estado
    };

    const created = saveOccurrence(payload);
    if (created) navigate(`/ocorrencias/${created.id}`);
  };

  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <h2>Relatar Ocorrência</h2>

      {errors.length > 0 && (
        <div className="error-box">
          <ul>
            {errors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      <Form onSubmit={handleSubmit} className="form-container">
        {/* CEP */}
        <div className="form-group">
          <label htmlFor="cep">📮 CEP (opcional)</label>
          <input
            type="text"
            id="cep"
            name="cep"
            value={form.cep}
            onChange={handleChange}
            onBlur={handleCepBlur}
            placeholder="Ex: 01001000"
          />
        </div>

        {/* Rua / Local */}
        <div className="form-group">
          <label htmlFor="local">📍 Local / Rua</label>
          <input
            type="text"
            id="local"
            name="local"
            value={form.local}
            onChange={handleChange}
            placeholder="Ex: Rua das Laranjeiras, Bairro Centro"
            required
          />
        </div>

        {/* Bairro */}
        <div className="form-group">
          <label htmlFor="bairro">🏘️ Bairro</label>
          <input
            type="text"
            id="bairro"
            name="bairro"
            value={form.bairro}
            onChange={handleChange}
            placeholder="Preenchido pelo CEP"
            disabled={!form.bairro}
          />
        </div>

        {/* Cidade */}
        <div className="form-group">
          <label htmlFor="cidade">🌆 Cidade</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            value={form.cidade}
            onChange={handleChange}
            placeholder="Preenchido pelo CEP"
            disabled={!form.cidade}
          />
        </div>

        {/* Estado */}
        <div className="form-group">
          <label htmlFor="estado">🗺️ Estado</label>
          <input
            type="text"
            id="estado"
            name="estado"
            value={form.estado}
            onChange={handleChange}
            placeholder="Preenchido pelo CEP"
            disabled={!form.estado}
          />
        </div>

        {/* Data */}
        <div className="form-group">
          <label htmlFor="data">📅 Data</label>
          <input type="date" id="data" name="data" value={form.data} onChange={handleChange} required />
        </div>

        {/* Crime */}
        <div className="form-group">
          <label htmlFor="crime">🚨 Tipo de crime</label>
          <select id="crime" name="crime" value={form.crime} onChange={handleChange} required>
            <option value="">Selecione</option>
            {crimeOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Descrição */}
        <div className="form-group">
          <label htmlFor="descricao">📝 Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            placeholder="Conte o que aconteceu..."
            required
          />
        </div>

        {/* BO */}
        <div className="form-group">
          <label>📄 Registrou BO?</label>
          <select name="hasBo" value={form.hasBo} onChange={handleChange} required>
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>

        {/* Número do BO */}
        <div className="form-group">
          <label htmlFor="numeroBo">📎 Nº do BO (opcional)</label>
          <input
            type="text"
            id="numeroBo"
            name="numeroBo"
            value={form.numeroBo}
            onChange={handleChange}
            placeholder="Ex: 2025-000123-01"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar relato
        </button>
      </Form>

      <div className="info-box">
        <h3>Por que registrar um BO?</h3>
        <p>
          Mesmo que pareça que "não vai dar em nada", o registro fortalece a
          segurança pública.
        </p>
        <ul>
          <li>Gera dados para pressionar autoridades</li>
          <li>Serve como base legal para futuras condenações</li>
          <li>Pode ser feito online, 100% gratuito</li>
        </ul>
      </div>
    </div>
  );
}