import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import { productFields, countries, dialCodes } from "../mock";

const fieldCls =
  "bg-black/30 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-[#7cc142] h-11";
const labelCls = "text-white/85 text-sm font-medium";

const RegistrationForm = () => {
  const [gender, setGender] = useState("");
  const [dial, setDial] = useState("+33");
  const [country, setCountry] = useState("");
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree1 || !agree2) {
      toast.error("Veuillez accepter les mentions avant de soumettre.");
      return;
    }
    const data = Object.fromEntries(new FormData(e.target).entries());
    try {
      localStorage.setItem("olynation_submission", JSON.stringify(data));
    } catch (_) {}
    toast.success("Soumis ! Votre parrain sera informé pour vous aider dans votre inscription. (démo)");
    e.target.reset();
    setGender("");
    setCountry("");
    setAgree1(false);
    setAgree2(false);
  };

  return (
    <form onSubmit={handleSubmit} className="oly-form-inner mt-2">
      <p className="text-center text-sm font-semibold uppercase tracking-wide text-red-400">
        Veuillez saisir votre nom complet exactement
        <br />
        comme sur votre pièce d'identité pour éviter tout problème de vérification.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label className={labelCls}>Prénom *</Label>
          <Input name="firstName" required placeholder="Prénom" className={fieldCls} />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>Nom *</Label>
          <Input name="lastName" required placeholder="Nom" className={fieldCls} />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>Deuxième prénom</Label>
          <Input name="middleName" placeholder="Deuxième prénom" className={fieldCls} />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>Numéro de pièce d'identité (Passeport / Permis de conduire / Carte nationale) *</Label>
          <Input name="idNumber" required placeholder="Numéro de pièce d'identité" className={fieldCls} />
          <p className="text-xs text-white/45">Assurez-vous que le numéro de pièce d'identité saisi correspond au nom complet indiqué ci-dessus.</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <Label className={labelCls}>Genre</Label>
          <RadioGroup value={gender} onValueChange={setGender} className="space-y-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="homme" id="g-male" className="border-white/40 text-[#7cc142]" />
              <Label htmlFor="g-male" className="text-white/80">♂ Homme</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="femme" id="g-female" className="border-white/40 text-[#7cc142]" />
              <Label htmlFor="g-female" className="text-white/80">♀ Femme</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>E-mail *</Label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <Input name="email" type="email" required placeholder="Votre adresse e-mail" className={`${fieldCls} pl-9`} />
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label className={labelCls}>Téléphone *</Label>
          <div className="flex gap-2">
            <Select value={dial} onValueChange={setDial}>
              <SelectTrigger className={`${fieldCls} w-28`}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {dialCodes.map((d) => (
                  <SelectItem key={d.c} value={d.d}>{d.flag} {d.d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input name="phone" required placeholder="Téléphone" className={`${fieldCls} flex-1`} />
          </div>
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>Prénom du parrain *</Label>
          <Input name="sponsorFirstName" required placeholder="Nom de votre parrain" className={fieldCls} />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>E-mail du parrain</Label>
          <Input name="sponsorEmail" type="email" placeholder="E-mail de votre parrain" className={fieldCls} />
          <p className="text-xs text-white/45">Demandez son e-mail à la personne qui vous a partagé cette opportunité.</p>
        </div>
      </div>

      <h3 className="mt-10 text-center text-xl font-semibold text-white">Votre Adresse Personnelle</h3>
      <div className="mt-5 space-y-6">
        <div className="space-y-2">
          <Label className={labelCls}>Adresse *</Label>
          <Input name="street" required placeholder="Adresse" className={fieldCls} />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label className={labelCls}>Ville *</Label>
            <Input name="city" required placeholder="Ville" className={fieldCls} />
          </div>
          <div className="space-y-2">
            <Label className={labelCls}>Région / État</Label>
            <Input name="state" placeholder="Région / État" className={fieldCls} />
          </div>
          <div className="space-y-2">
            <Label className={labelCls}>Pays</Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger className={fieldCls}>
                <SelectValue placeholder="Pays" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className={labelCls}>Code postal *</Label>
            <Input name="postal" required placeholder="Code postal" className={fieldCls} />
          </div>
        </div>
      </div>

      <h3 className="mt-10 text-center text-xl font-semibold text-white">Adresse du Destinataire</h3>
      <p className="mt-2 text-center text-sm text-white/55">
        Complétez cette section uniquement si le nom ou l'adresse du destinataire diffèrent des informations de votre compte.
      </p>
      <div className="mt-5 space-y-6">
        <div className="space-y-2">
          <Label className={labelCls}>Nom du destinataire</Label>
          <Textarea name="recipientName" rows={3} placeholder="Nom du destinataire" className={`${fieldCls} h-auto`} />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>Numéro de contact du destinataire</Label>
          <Input name="recipientPhone" placeholder="Numéro de contact du destinataire" className={fieldCls} />
        </div>
        <div className="space-y-2">
          <Label className={labelCls}>Adresse complète du destinataire</Label>
          <Textarea name="recipientAddress" rows={3} placeholder="Adresse complète du destinataire" className={`${fieldCls} h-auto`} />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label className={labelCls}>Code postal du destinataire</Label>
            <Input name="recipientPostal" placeholder="Code postal du destinataire" className={fieldCls} />
          </div>
          <div className="space-y-2">
            <Label className={labelCls}>Pays du destinataire</Label>
            <Input name="recipientCountry" placeholder="Pays du destinataire" className={fieldCls} />
          </div>
        </div>
      </div>

      <h3 className="mt-10 text-center text-xl font-semibold text-white">Produits</h3>
      <p className="mt-2 text-center text-sm text-white/55">
        Veuillez INDIQUER la quantité souhaitée pour chaque produit. Si aucune, LAISSEZ VIDE.
      </p>
      <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
        {productFields.map((p, i) => (
          <div key={i} className="space-y-2">
            <Label className={labelCls}>{p}</Label>
            <Input name={`qty_${i}`} type="number" min="0" placeholder="0" className={fieldCls} />
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-5">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-white/70">
          <Checkbox checked={agree1} onCheckedChange={(v) => setAgree1(!!v)} className="mt-0.5 border-white/40 data-[state=checked]:bg-[#4a9e28] data-[state=checked]:border-[#4a9e28]" />
          <span>
            Je comprends que ce formulaire ne m'inscrit pas et ne traite aucun paiement. Il s'agit d'un outil destiné à aider mon parrain à m'accompagner dans mon inscription chez OlyLife. Je reconnais que ce formulaire ne collecte ni ne stocke aucune donnée personnelle. J'accepte que l'e-mail du parrain que j'ai fourni reçoive les informations que j'ai soumises, dans le seul but de m'assister dans mon inscription et mon intégration.
          </span>
        </label>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-white/70">
          <Checkbox checked={agree2} onCheckedChange={(v) => setAgree2(!!v)} className="mt-0.5 border-white/40 data-[state=checked]:bg-[#4a9e28] data-[state=checked]:border-[#4a9e28]" />
          <span>
            En soumettant, je reconnais que mon parrain m'aidera dans mon inscription et me fournira un lien de paiement.
          </span>
        </label>
        <p className="text-sm text-white/55">
          Je comprends que je dois vérifier que le nom du marchand est OlyLife Limited – Hong Kong, ou m'assurer que tout paiement est effectué via une passerelle sécurisée et vérifiée, telle qu'un virement bancaire direct, portant le même nom de marchand.
        </p>
        <p className="text-sm text-white/55">
          Si j'ai un doute sur la légitimité du parrain ou des instructions de paiement, je vérifierai les distributeurs autorisés via{" "}
          <a href="https://www.olylife.com" target="_blank" rel="noreferrer" className="text-[#8fd15a] underline">https://www.olylife.com</a>{" "}
          dans la section Contact Us &gt; Specific Regions avant tout paiement.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <button type="submit" className="oly-submit">Soumettre</button>
        <div className="mt-5 text-sm text-white/60">
          <a href="#" className="hover:text-white">Politique de confidentialité</a>
          <span className="mx-2 text-white/30">|</span>
          <a href="#" className="hover:text-white">Conditions d'utilisation</a>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
