def DNAtoRNA(dna):
    arr = [dna[i] for i in range(len(dna))]
    print(arr)
    return dna.replace("T", "U")


print(DNAtoRNA("TTTT"))
